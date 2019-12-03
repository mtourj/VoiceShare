const express = require('express');

const router = express.Router();

const secured = require('../utils/secured');

const usersController = requre('./usersController');

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.post('/resume', secured, usersController.resume);
router.post('/logout', secured, usersController.logout)
router.post('/:id', secured, usersController.getById);
router.post('/update', secured, usersController.update);
router.post('/delete', secured, usersController.delete);

exports.router = router;