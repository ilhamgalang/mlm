const express = require('express');
const router = express.Router();

const userController = require('./controller/user');

// user
router.post('/user', userController.create);
router.post('/login', userController.login);

module.exports = router;
