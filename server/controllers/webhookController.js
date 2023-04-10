const { buffer } = require('micro');
const orderController = require('./orderController');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = 'whsec_0ce5c547c31fcb5c9684cfdd6ecf8144b1166589944e1c0903897c248de26b87';

const postOrder = async (req, res) => {
    // Set a longer timeout for the webhook request
    // req.setTimeout(100000);

    try {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const signature = req.headers['stripe-signature'];

        console.log('This is the request from Stripe', req.body);
        console.log('CERTIFICATE', requestBuffer);

        // Verify that the signature is from Stripe
        const event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);

        // Handle checkout session complete event
        console.log('This is the event', event);
        console.log(event.type);
        res.status(200).send('Success');
    } catch (error) {
        console.log(error.message);
        res.status(400).send(`Webhook Error: ${error.message}`);
    }
};

module.exports = {
    postOrder,
};
