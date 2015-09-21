module.exports = (function() {
	var config = require('../build/build.config.js');
	var del = require('del');

	var name = 'clean';

	//clean temporary directories
	var task = del.bind(null, [config.dist, config.tmp]);

	return {
		name: name,
		task: task
	};
})();

