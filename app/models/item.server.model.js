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
		trime: true,
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

	created: {
		type: Date,
		default: Date.now
	},
});

mongoose.model('Item', ItemSchema);
