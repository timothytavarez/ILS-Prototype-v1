'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('..//errors.server.controller'),
  User = mongoose.model('User'),
  _ = require('lodash');

/**
 * Show the current User
 */
exports.read = function(req, res) {
  res.jsonp(req.foundUser);
};

/**
 * Update a User
 */
exports.update = function(req, res) {
  var user = req.user ;

  user = _.extend(user , req.body);

  user.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(user);
    }
  });
};

/**
 * List of Users
 */
exports.list = function(req, res) {
  User.find().sort('-lastName').exec(function(err, users) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(users);
    }
  });
};

/**
 * User middleware
 */
exports.userByID = function(req, res, next, id) {
  User.findById(id).exec(function(err, user) {
    if (err) return next(err);
    if (! user) return next(new Error('Failed to load User ' + id));
    req.foundUser = {
      _id: user._id,
      username: user.username,
      roles: user.roles,
      created: user.created,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    };

    next();
  });
};

/**
 * User authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
  // Add in verification that the user has the correct permissions to edit
  // users.  The code below just checks if they were the user to create the
  // user.

  // if (req.user.user.id !== req.user.id) {
  // return res.status(403).send('User is not authorized');
  // }
  next();
};
