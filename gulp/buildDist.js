module.exports = (function() {
	var runSequence = require('run-sequence');

	var clean = require('./clean').name 
	var jshint = require('./jshint').name 
	var build = require('./build').name 
	var copy = require('./copy').name 
	var copyAssets = require('./copyAssets').name 
	var images = require('./images').name 
	var testUnit = require('./testUnit').name 
	var html = require('./html').name 

	var name = 'build:dist';
	var deps = [ clean ];

	return {
		name: name,
		deps: deps,
		task: task
	};

	//build files for creating a dist release
	function task(cb) {
		var seq = [
			clean,
			jshint,
			build,
			copy,
			copyAssets,
			images,
			testUnit,
			html
		];

		runSequence(seq, html, cb);
	};
})();
