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
	// item = _.extend(item , req.body);
	if( item.isCheckedOut )
	{
		return res.status(403).send({ 
			message: 'Item is already checked out'
		});
	}
	else {
		item.isCheckedOut = true;
		item.checkedOutBy = user._id;
		item.checkOutDate = Date.now;
		item.dueDate = Date.now;
		
		//We will have to remove the hardcoding here and 
		//set the due date based on the library configurations
		//For now it is due 1 month later
		item.dueDate.setMonthl( item.checkOutDate.getMonth() + 1 );
		//we should also look into a library for date manipulations
	}

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
 * Item middleware
 */
exports.itemByID = function(req, res, next, id) { 
	Item.findById(id).populate('user', 'displayName').exec(function(err, item) {
		if (err) return next(err);
		if (! item) return next(new Error('Failed to load Item ' + id));
		req.item = item ;
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
