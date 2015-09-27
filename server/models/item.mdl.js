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
	hosts: [ 
		'191.239.52.231:9200'
	]
});

var Item = mongoose.model('Item', ItemSchema),
stream = Item.synchronize(),
count = 0;

stream.on('data', function(err, doc){
  count++;
});
stream.on('close', function(){
  console.log('indexed ' + count + ' documents!');
});
stream.on('error', function(err){
  console.log(err);
});
