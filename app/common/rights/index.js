'use strict';

var roleOptions = [];
// Load `*.js` under current directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync(__dirname + '/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
		var name = file.replace('.js', '');
		exports.files = {};
		exports.files[name] = require('./' + file);

		roleOptions.push( { name: exports.files[name].name, rights: exports.files[name].rights } );
	}
});

exports.all = function()  {
	return roleOptions;
};

