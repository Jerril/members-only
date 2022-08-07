const User = require('../models/user');

exports.index = function(req, res, next) {
    res.render('index', { title: 'Exclusive Clubhouse' });
}

// GET Register User
exports.register_user_get = function(req, res, next) {
    res.render('register_form');
}

// POST Register User
exports.register_user_post = function(req, res, next) {
    res.send('POST Register user');
}

// GET Login User
exports.login_user_get = function(req, res, next) {
    res.render('login_form');
}

// POST Login User
exports.login_user_post = function(req, res, next) {
    res.send('POST login user');
}