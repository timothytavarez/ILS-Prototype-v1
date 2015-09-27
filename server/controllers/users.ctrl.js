'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend user's controller
 */
module.exports = _.extend(
	require('./users/users.authentication.ctrl'),
	require('./users/users.authorization.ctrl'),
	require('./users/users.password.ctrl'),
	require('./users/users.profile.ctrl'),
	require('./users/users.administration.ctrl')
);
