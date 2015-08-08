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
		required: true,
		trim: true
	},

	desc: {
		type: String,
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
		
		// Automatically fill out our roleObj with the rightsGroups found 
		// in the ./rights directory.
		// If the rightsGroup has a name specified(and it is a string) use it
		if( rightsGroups[group].name && typeof(rightsGroups[group].name) === 'string' ) {
			roleObj[rightsGroups[group].name] = Schema.Types.Mixed;
			// roleOptions[rightsGroups[group].name] = rightsGroups[group].rights;
		}
		// otherwise default to the file's name.
		else {
			roleObj[group] = Schema.Types.Mixed;
			// roleOptions[group] = rightsGroups[group].rights;
		}
	}
}
// console.log('roleObj: ');
// console.log(roleObj);
// console.log('roleOptions: ');
// console.log(roleOptions);

/**
 * Role Schema
 */
var RoleSchema = new Schema( roleObj );


RoleSchema.statics.allOptions = rights.all();
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
