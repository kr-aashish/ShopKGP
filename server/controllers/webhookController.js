// const {buffer} = require('micro');
// const getRawBody = require('raw-body');
const orderController = require('./orderController');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = 'whsec_0ce5c547c31fcb5c9684cfdd6ecf8144b1166589944e1c0903897c248de26b87';

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
        console.log('metadata:', event.data.object.metadata);
    }
    res.json({success: true});
}

module.exports = {
    postOrder
};