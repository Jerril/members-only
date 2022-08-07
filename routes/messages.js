const express = require('express');
const router = express.Router();
const message_controller = require('../controllers/messageController');

router.get('/', message_controller.index);

// GET Send message
router.get('/send', message_controller.send_message_get);

// POST Send message
router.get('/send', message_controller.send_message_post);

module.exports = router;