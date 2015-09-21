module.exports = (function() {
	var protractorConfig = require('../build/protractor.config.js');
	var config = require('../build/build.config.js');
	var gulp = require('gulp');
	var $ = require('gulp-load-plugins')();

	var webdriverUpdate = require('./webdriverUpdate').name;

	var name = 'test:e2e';
	var deps = [webdriverUpdate];

	return {
		name: name,
		deps: deps,
		task: task
	};

// Run e2e tests using protractor, make sure serve task is running.
	function task(cb) {
		return gulp
			.src(protractorConfig.config.specs)
			.pipe($.protractor.protractor({
				configFile: '../build/protractor.config.js'
			}))
			.on('error', function(e) {
				throw e;
			});
	}
})();

