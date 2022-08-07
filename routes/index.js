const express = require('express');
const router = express.Router();
const index_controller = require('../controllers/indexController');

// GET home page.
router.get('/', index_controller.index);

// GET - Register user
router.get('/register', index_controller.register_user_get);

// POST - Register user
router.post('/register', index_controller.register_user_post);

// GET - Login user
router.get('/login', index_controller.login_user_get);

// POST - Login user
router.post('/login', index_controller.login_user_post);

module.exports = router;