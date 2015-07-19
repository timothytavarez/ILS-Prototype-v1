'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Item Schema
 */
var ItemSchema = new Schema({
	itemType: {
		type: String,
		trim: true,
		required: 'Please select Item type',
	},
	title: {
		type: String,
		default: '',
		required: 'Please fill Item title',
		trim: true
	},
	author: String,
	desc: String,
	pub: String,
	pubDate: Date,
	image: {},
	isCheckedOut: {
		type: Boolean,
		default: false
	},
	checkedOutBy: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	checkoutDate: Date,
	dueDate: Date,
	created: {
		type: Date,
		default: Date.now
	},
});

mongoose.model('Item', ItemSchema);
