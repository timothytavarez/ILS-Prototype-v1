module.exports = (function() {
	var runSequence = require('run-sequence');
	
	//Tasks
	var clean = require('./clean').name;
	var sass = require('./sass').name;
	var templates = require('./templates').name;
	var html = require('./html').name;

	var name = 'build';
	var deps = [clean];

	return {
		name: name,
		deps: deps,
		task: task
	};


	//build files for development
	function task(cb) {
		var seq = [
			sass,
			templates
		];

		runSequence(seq, html, cb);
	};
})();
