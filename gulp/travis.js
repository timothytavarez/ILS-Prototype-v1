module.exports = (function() {
	var karmaConfig = require('../build/karma.config.js');
	var karma = require('karma').server;
	var $ = require('gulp-load-plugins')();
	var _ = require('lodash');

	var build = require('./build').name;

	var name = 'travis';
	var deps = [build];

	return {
		name: name,
		deps: deps,
		task: task
	};

	// Run unit tests with travis CI.
	function task(cb) {
		karma.start(_.assign({}, karmaConfig, {
			singleRun: true,
			browsers: ['PhantomJS']
		}), cb);
	}
})();
