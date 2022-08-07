const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/userController');


/* GET users listing. */
router.get('/', user_controller.index);

// GET User profile
router.get('/profile', user_controller.user_profile_get);

// POST User profile
router.post('/profile', user_controller.user_profile_post);

module.exports = router;