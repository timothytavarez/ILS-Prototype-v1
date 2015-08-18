'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Method helper functions
function UppercaseFirstLetter( str ) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function assignRight( right, rightsGroup ) {
	rightsGroup[right] = true;
	rightsGroup.markModified(right);
}

function unassignRight( right, rightsGroup ) {
	rightsGroup[right] = undefined;
	rightsGroup.markModified(right);
}


var rights = require('../common/rights');
var rightsGroups = rights.files;

// var roleMethods;
var roleObj = {
	roleName: {
		type: String,
		required: 'Please enter a name for the Role',
		trim: true
	},

	desc: {
		type: String,
		default: 'No description given.',
		trim: true
	},
	
	created: { 
		type: Date,
		default: Date.now
	},

	updated: {
		type: Date,
		default: Date.now
	},

	users: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}]
};

// var roleOptions = {};
for (var group in rightsGroups) {
	if (rightsGroups.hasOwnProperty(group)) {
		roleObj[rightsGroups[group].name] = [String];
	}
}
// console.log('rightsGroups');
// console.log(rightsGroups);
// console.log('\n');
// console.log('roleObj: ');
// console.log(roleObj);

/**
 * Role Schema
 */
var RoleSchema = new Schema( roleObj );


RoleSchema.statics.allOptions = rights.all;
// function()  {
// 	return JSON.stringify(roleOptions);
// };

/**
 * Hook a pre save method to keep the updated property current
 */
RoleSchema.pre('save', function(next) {
	this.updated = Date.now;
	next();
});

mongoose.model( 'Role', RoleSchema );
