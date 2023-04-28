const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../auth');

router.get('/welcome', auth, authController.welcomeMessage);

router.post('/signup', authController.userSignup);

router.post('/login', authController.userLogin);

router.post('/social', authController.socialLogin);

router.use('*', authController.handleAnyOtherCase);

module.exports = router;