// const {buffer} = require('micro');
// const getRawBody = require('raw-body');
// const orderController = require('./orderController')
const { order, product, stock } = require('../models');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = 'whsec_0ce5c547c31fcb5c9684cfdd6ecf8144b1166589944e1c0903897c248de26b87';

const createOrder = async (orderData) => {
    console.log('This is the order', orderData);

    const {id, amount_total, shipping_details, metadata} = orderData;
    const userId = metadata.userId;
    const products = JSON.parse(metadata.items);
    const price = amount_total / 100;
    const shippingAddress = JSON.stringify(shipping_details);
    const paymentInfo = id;

    try {
        //Do all checks before creating entry in order database

        // for (let i = 0; i < products.length; i++) {
        //     const itemId = products[i];
        //     const productData = await product.findByPk(itemId);
        //
        //     if (!productData) {
        //         res.status(404).json({
        //             message: 'Product not found',
        //         });
        //         return;
        //     }
        //
        //     const stockData = await stock.findOne({
        //         where: {itemId: itemId}
        //     })
        //
        //     if (stockData && stockData.quantity < 1) {
        //         res.status(404).json({
        //             message: 'Out of stock',
        //         });
        //         return;
        //     }
        // }

        // Create the order
        // const orderMetaData = await order.create({
        //     // orderId,
        //     price,
        //     paymentInfo,
        //     shippingAddress,
        //     userId,
        // });
        // res.status(200).json(orderMetaData);

        const orderMetaData = await order.create({
            price,
            paymentInfo,
            shippingAddress,
            userId,
        });
        // console.log(orderMetaData);

        for (const itemId of products) {
            const productData = await product.findByPk(itemId);
            // console.log(productData);

            const stockData = await stock.findOne({
                where: {itemId: itemId}
            })
            // console.log(stockData);


            // Update the stock
            if (stockData) {
                stockData.quantity = stockData.quantity - 1;
                await stockData.save();
            } else {
                await stock.create({
                    itemId,
                    quantity: 0,
                });
            }

            await productData.update({orderId: orderMetaData.orderId});
        }

        // Add each product to the order
        // for (let i = 0; i < products.length; i++) {
        // const itemId = products[i];
        // console.log(itemId);

        // const productData = await product.findByPk(itemId);
        // console.log(productData);
        //
        // const stockData = await stock.findOne({
        //     where: {itemId: itemId}
        // })
        // console.log(stockData);

        //
        // // Update the stock
        // if (stockData) {
        //     stockData.quantity = stockData.quantity - products[i].quantity;
        //     await stockData.save();
        // } else {
        //     await stock.create({
        //         itemId,
        //         quantity: 0,
        //     });
        // }
        //
        // await productData.update({orderId: orderMetaData.orderId});
        // }

    } catch (err) {
        console.error(err);
        // res.status(500).json({
        //     message: 'Error creating order',
        // });
    }
}

const postOrder = async (req, res) => {
    // console.log('This is the request from Stripe', req.body);
    // const requestBuffer = await buffer(req);
    // const payload = requestBuffer.toString();
    const payload = req.body;
    const payloadString = JSON.stringify(payload, null, 2);

    const header = stripe.webhooks.generateTestHeaderString({
        payload: payloadString,
        secret: endpointSecret,
    });
    const event = stripe.webhooks.constructEvent(payloadString, header, endpointSecret);

    // let event;
    // //Verify that the signature is from Stripe
    // try {
    //     event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
    // } catch (error) {
    //     console.log(error.message);
    //     return res.status(400).json({success: false});
    //     // .send(`Webhook Error: ${error.message}`);
    // }

    // Do something with mocked signed event
    // expect(event.id).to.equal(payload.id);
    // console.log(event.id, payload.id);

    //Handle checkout session complete event
    if (event.type === 'checkout.session.completed') {
        await createOrder(event.data.object);
    }
    res.json({success: true});
}

module.exports = {
    postOrder
};