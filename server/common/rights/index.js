'use strict';

var roleOptions = [];

exports.files = {};
// Load `*.js` under current directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync(__dirname + '/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
		var name = file.replace('.js', '');
		exports.files[name] = require('./' + file);

		roleOptions.push({ 
			name: exports.files[name].name, 
			dispName: exports.files[name].dispName, 
			rights: exports.files[name].rights
		});
	}
});
// console.log('exports.files');
// console.log(exports.files);
// console.log('\n');

exports.all = function()  {
	return roleOptions;
};

