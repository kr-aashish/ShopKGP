const stripe = require('stripe')('sk_test_51MuCNiSBkSkzOkBh9AXSdkcKz6N5PTHYmcowGfIFh1H9zOcCa1kZJi3rm6OIe3DYoVeSPq8MCrvje6t4fOkyCVJN00aqC2lz04');

const checkoutProduct = async (req, res) => {
    console.log("This is the request", req.body);
    const {userMetadata, stripeItems, basket} = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: stripeItems,
        mode: "payment",
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/error',
        metadata: {
            email: userMetadata.email,
            images: JSON.stringify(basket.map(item => item.imageUrl)),
        },
    })
    console.log(session);
    const sessionId = session.id;

    res.status(200)
        .json({id: sessionId});
}

module.exports = { checkoutProduct };