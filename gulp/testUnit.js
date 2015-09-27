module.exports = (function() {
	var _ = require('lodash');
	var build = require('./build').name;

	var name = 'test:unit';
	var deps = [build];

	return {
		name: name,
		deps: deps,
		task: task
	};

	//run unit tests and exit
	function task(cb) {
		var karmaConfig = require('../build/karma.config.js');
		var Server = new require('karma').Server;
		var karma = new Server(_.assign({}, karmaConfig, { singleRun: true }), cb);
		karma.start();
	}
})();
