const { order, stock, product } = require('../models');

const postOrder = (req, res) => {
    res.status(200).send("Hey there!");
}

module.exports = {
    postOrder
};