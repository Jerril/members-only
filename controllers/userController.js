const User = require('../models/user');

exports.index = function(req, res, next) {
    res.render('Return a resource');
}

exports.user_profile_get = function(req, res, next) {
    res.render('user_profile');
}

exports.user_profile_post = function(req, res, next) {
    res.send('Save user profile into the DB');
}