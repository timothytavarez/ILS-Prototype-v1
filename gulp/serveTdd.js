module.exports = (function() {
	var runSequence = require('run-sequence');

	var serve = require('./serve').name;
	var tdd = require('./tdd').name;

	var name = 'serve:tdd';

	return {
		name: name,
		task: task
	};

	//run the server,  watch for file changes and redo tests.
	function task(cb) {
		var seq = [ 
			serve,
			tdd
		];

		runSequence( seq, cb );
	}
})();
