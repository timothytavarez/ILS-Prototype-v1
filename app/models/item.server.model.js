'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	mongoosastic = require('mongoosastic'),
	Schema = mongoose.Schema;

/**
 * Item Schema
 */
var ItemSchema = new Schema({
	itemType: {
		type: String,
		trim: true,
		required: 'Please select Item type',
		es_indexed: true
	},
	title: {
		type: String,
		default: '',
		required: 'Please fill Item title',
		trim: true,
		es_indexed: true
	},
	author: {type: String, es_indexed: true},
	desc: {type: String, es_indexed: true},
	pub: {type: String, es_indexed: true},
	pubDate: {type: Date, es_indexed: true},
	image: {},
	isOnHold: {
		type: Boolean,
		default: false
	},
	heldFor: {
		type: Schema.ObjectId,
		ref: 'User'
	},
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
	}
});


ItemSchema.plugin(mongoosastic, {
	host: '191.239.52.231:9200',
	curlDebug: true
});

mongoose.model('Item', ItemSchema);

// ItemSchema.createMapping(function(err, mapping){  
//   if(err){
//     console.log('error creating mapping (ignore this)');
//     console.log(err);
//   }else{
//     console.log('mapping created!');
//     console.log(mapping);
//   }
// });