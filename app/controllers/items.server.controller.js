'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Item = mongoose.model('Item'),
	_ = require('lodash');

/**
 * Create a Item
 */
exports.create = function(req, res) {
	var item = new Item(req.body);
	item.user = req.user;

	item.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(item);
		}
	});
};

/**
 * Show the current Item
 */
exports.read = function(req, res) {
	res.jsonp(req.item);
};

/**
 * Update a Item
 */
exports.update = function(req, res) {
	var item = req.item ;

	item = _.extend(item , req.body);

	item.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(item);
		}
	});
};

/**
 * Delete an Item
 */
exports.delete = function(req, res) {
	var item = req.item ;

	item.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(item);
		}
	});
};

/**
 * List of Items
 */
exports.list = function(req, res) { 
	Item.find().sort('-created').populate('user', 'displayName').exec(function(err, items) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(items);
		}
	});
};

/**
 * Check out an Item
 */
exports.checkOut = function(req, res) {
	var item = req.item;
	var user = req.user;

	if( item.isOnHold && !item.heldFor._id.equals(user._id) )
	{
		return res.status(403).send({ 
			message: 'Unable to check out - Item is item is being held for someone else'
		});
	} 
	else if( item.isCheckedOut )
	{
		return res.status(403).send({ 
			message: 'Unable to check out - Item is already checked out'
		});
	}
	else {
		item.isOnHold = false;
		item.heldFor = undefined;
		item.isCheckedOut = true;
		item.checkedOutBy = user._id;
		item.checkOutDate = Date.now;
		var localDueDate = new Date();
		localDueDate.setMonth( localDueDate.getMonth() + 1 );
		item.dueDate = new Date(localDueDate.toISOString());

		item.save(function(err) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(item);
			}
		});
	}
};

/**
 * Check in an Item
 */
exports.checkIn = function(req, res) {
	var item = req.item;
	var user = req.user;

	if( !item.isCheckedOut )
	{
		return res.status(403).send({ 
			message: 'Unable to check in - Item is already checked in'
		});
	}
	else {
		item.isCheckedOut = false;
		item.checkedOutBy = undefined;
		item.checkOutDate = undefined;
		item.dueDate = undefined;

		item.save(function(err) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(item);
			}
		});
	}
};

/**
 * Renew an Item
 */
exports.renew = function(req, res) {
	var item = req.item;
	var user = req.user;

	if( !item.isCheckedOut ) {
		return res.status(403).send({ 
			message: 'Unable to renew - Item has not been checked out'
		});
	}
	else if( item.isOnHold ) {
		return res.status(403).send({ 
			message: 'Unable to renew - Item has been put on hold'
		});
	}
	else if( !user._id.equals(item.checkedOutBy) ){
		return res.status(403).send({ 
			message: 'Unable to renew - You cannot renew an item you did not check out'
		});
	}
	else {
		//Extends due date out another month
		var localDueDate = new Date(item.dueDate.toDateString());
		localDueDate.setMonth( localDueDate.getMonth() + 1 );
		item.dueDate = new Date(localDueDate.toISOString());

		item.save(function(err) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(item);
			}
		});
	}
};

/**
 * Hold an item
 */
exports.hold = function(req, res) {
	var item = req.item;
	var user = req.user;

	if( item.isOnHold ) {
		return res.status(403).send({ 
			message: 'Unable to hold - Item has already been put on hold'
		});
	}
	else {
		item.isOnHold = true;
		item.heldFor = user;

		item.save(function(err) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(item);
			}
		});
	}
};

/**
 * Item middleware
 */
exports.itemByID = function(req, res, next, id) { 
	var populateQuery = [
		{path:'displayName'}, 
		{path:'heldFor', select:'_id username email lastName firstName'}, 
		{path:'checkedOutBy', select:'_id username email lastName firstName'}
	];
	Item.findById(id).populate(populateQuery).exec(function(err, item) {
		if (err) return next(err);
		if (! item) return next(new Error('Failed to load Item ' + id));

		req.item = item;
		next();
	});
};

/**
 * Item authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	// Add in verification that the user has the correct permissions to edit
	// items.  The code below just checks if they were the user to create the
	// item.

	// if (req.item.user.id !== req.user.id) {
		// return res.status(403).send('User is not authorized');
	// }
	next();
};
