'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	mongoosastic = require('mongoosastic'),
	Schema = mongoose.Schema;

/**
 * Library Schema
 */
var LibrarySchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Library name',
		trim: true,
		es_indexed: true
	},
	created: {
		type: Date,
		default: Date.now,
		es_indexed: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Library', LibrarySchema);
LibrarySchema.plugin(mongoosastic);