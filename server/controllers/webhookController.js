const {buffer} = require('micro');
// const getRawBody = require('raw-body');
const orderController = require('./orderController');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = 'whsec_0ce5c547c31fcb5c9684cfdd6ecf8144b1166589944e1c0903897c248de26b87';

const postOrder = async (req, res) => {
    console.log('This is the request from Stripe', req.body);
    // console.log(req.body.type);
    // console.log(req.body.data);
    const requestBuffer = await buffer(req.body);
    const payload = requestBuffer.toString();
    const signature = req.headers['stripe-signature'];

    let event;
    //Verify that the signature is from Stripe
    try {
        event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({success: false});
            // .send(`Webhook Error: ${error.message}`);
    }

    //Handle checkout session complete event
    console.log('This is the event', event);
    res.json({success: true});
}

module.exports = {
    postOrder
};