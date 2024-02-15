const express = require('express');

const router = express.Router();
const ControllerUser = require('../controllers/users');

router.get('/', ControllerUser.getAllUsers);

router.post('/', ControllerUser.createAllUsers);

module.exports = router;
