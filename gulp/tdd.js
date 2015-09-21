module.exports = (function() {
	var _ = require('lodash');

	var name = 'tdd';

	return {
		name: name,
		task: task
	};

	// Run unit tests and watch files.
	function task(cb) {
		var karmaConfig = require('../build/karma.config.js');
		var Server = require('karma').Server
		var karma = new Server(_.assign({}, karmaConfig, {
			singleRun: false,
			action: 'watch',
			browsers: ['PhantomJS']
		}), cb);
		karma.start();
	}
})();
