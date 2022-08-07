const Message = require('../models/message');

exports.index = function(req, res, next) {
    res.render('message_list');
}

exports.send_message_get = function(req, res, next) {
    res.render('message_form');
}

exports.send_message_post = function(req, res, next) {
    res.send("Save the message into the DB");
}