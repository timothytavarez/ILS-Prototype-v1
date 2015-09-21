module.exports = (function() {
	var nodemon = require('nodemon');
	var browserSync = require('browser-sync');
	var reload = browserSync.reload;
	var config = require('../build/build.config.js');
	var pkg = require('../package');
	var $ = require('gulp-load-plugins')({lazy:true});
	var started = false;

	var name = 'nodemon';

	return {
		name: name,
		task: task
	};


	function task(cb) {
		return nodemon({
			script: config.serverEntry,
			watch: config.serverFiles
		})
		.on('start', function() {
			if(!started){ 
				cb(); started = true; 
			}
		})
		.on('restart', function() {
			// reload connected browsers after a slight delay
			setTimeout(function(){
				reload({
					stream: false
				});
			}, config.syncDelay);
		});
	}
})();
