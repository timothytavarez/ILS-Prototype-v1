'use strict';

var roleOptions = {};
// Load `*.js` under current directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync(__dirname + '/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
		var name = file.replace('.js', '');
		exports.files = {};
		exports.files[name] = require('./' + file);

		// Automatically fill out roleOptions 
		// If the rights file has a name specified(and it is a string) use it
		if( exports.files[name].name && typeof(exports.files[name].name) === 'string' ) {
			roleOptions[exports.files[name].name] = exports.files[name].rights;
		}
		// otherwise default to the file's name.
		else {
			roleOptions[name] = exports.files[name].rights;
		}
	}
});

exports.all = function()  {
	return roleOptions;
};

