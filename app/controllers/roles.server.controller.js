'use strict';

/**
 * Module dependencies.
 */
 var mongoose = require ('mongoose'),
        errorHandler = require('./errors.server.controller'),
        Role = mongoose.model('Role'),
        User = mongoose.model('User'), // uh oh, why is this not registering?
	_ = require('lodash');
	
/**
 * Create a Role
 */
exports.create = function(req, res) {
    var role = new Role(req.body);
    
    role.user = req.user;
    
    role.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(role);
		}
	});
};

/**
 * Show the current Role
 */
exports.read = function(req, res) {
	res.jsonp(req.role);
};

/**
 * Update a Role
 */
 exports.update = function(req, res) {
     var role = req.role;
     
     role = _.extend(role, req.body);
     
     	role.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(role);
		}
	});
};

/**
 * Delete a Role
 */
exports.delete = function(req, res) {
	var role = req.item ;

	role.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(role);
		}
	});
};

/**
 * List of Roles
 */
exports.list = function(req, res) { 
	Role.find().sort('-created').populate('role', 'roleName').exec(function(err, roles) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(roles);
		}
	});
};

/**
 * Role middleware
 */
exports.roleByID = function(req, res, next, id) { 
	var populateQuery = [
		{path:'roleName'} 
	];
	Role.findById(id).populate(populateQuery).exec(function(err, role) {
		if (err) return next(err);
		if (! role) return next(new Error('Failed to load Role ' + id));

		req.role = role;
		next();
	});
};

/**
 * Role authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	// Add in verification that the user has the correct permissions to edit
	// roles.  The code below just checks if they were the user to create the
	// role.

	// if (req.role.user.id !== req.user.id) {
		// return res.status(403).send('User is not authorized');
	// }
	next();
};

