const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/all', orderController.getAllOrders);

router.get('/get/:id', orderController.getOrderById);

router.post('/create', orderController.createOrder);

router.delete('/delete/:id', orderController.deleteOrder);

module.exports = router;