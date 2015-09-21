module.exports = (function() {
	var config = require('../build/build.config.js');
	var pkg = require('../package');
	var gulp = require('gulp');
	var browserSync = require('browser-sync');

	var buildDist = require('./buildDist').name;

	var name = 'serve:dist';
	var deps = [buildDist]; // TODO: add in use of Forever

	return {
		name: name,
		deps: deps,
		task: task
	};

	//run the server after having built generated files, and watch for changes
	function task(cb) {
		browserSync({
			notify: false,
			logPrefix: pkg.name,
			server: ['build', 'client']
		});
	}
})();

