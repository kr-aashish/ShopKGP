// const {buffer} = require('micro');
// const getRawBody = require('raw-body');
const orderController = require('./orderController');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = 'whsec_0ce5c547c31fcb5c9684cfdd6ecf8144b1166589944e1c0903897c248de26b87';

const postOrder = async (req, res) => {
    // console.log('This is the request from Stripe', req.body);
    // console.log(req.body.type);
    // console.log(req.body.data);
    // const requestBuffer = await buffer(req);
    // const payload = requestBuffer.toString();
    const payload = req.body;

    const payloadString = JSON.stringify(payload, null, 2);

    const header = stripe.webhooks.generateTestHeaderString({
        payload: payloadString,
        secret: endpointSecret,
    });
    const event = stripe.webhooks.constructEvent(payloadString, header, endpointSecret);
    console.log(event.id, payload.id);

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

    //Handle checkout session complete event
    // console.log('This is the event', event);
    // console.log('automatic_tax:', event.data.object.automatic_tax);
    // console.log('custom_fields:', event.data.object.custom_fields);
    // console.log('custom_text:', event.data.object.custom_text);
    // console.log('customer_details:', event.data.object.customer_details);
    console.log('metadata:', event.data.object.metadata);
    // console.log('payment_method_types:', event.data.object.payment_method_types);
    // console.log('phone_number_collection:', event.data.object.phone_number_collection);
    // console.log('shipping_address_collection:', event.data.object.shipping_address_collection);
    // console.log('shipping_details:', event.data.object.shipping_details);
    // console.log('shipping_options:', event.data.object.shipping_options);
    // console.log('total_details:', event.data.object.total_details);
    res.json({success: true});
}

module.exports = {
    postOrder
};