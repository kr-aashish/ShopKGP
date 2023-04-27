const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.userSignup);

router.post('/login', authController.userLogin);

router.post('/social', authController.socialLogin);

router.use('*', authController.handleAnyOtherCase);

module.exports = router;