const express = require('express');

const router = express.Router();

const secured = require('../utils/secured');

const usersController = require('./usersController');

router.post('/login', secured, usersController.login);
router.post('/resume', secured, usersController.resume);
router.post('/logout', secured, usersController.logout)
router.post('/:id', secured, usersController.getById);
router.post('/update', secured, usersController.update);
router.post('/delete', secured, usersController.delete);

module.exports = router;