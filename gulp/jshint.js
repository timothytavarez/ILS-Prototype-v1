module.exports = (function() {
	var config = require('../build/build.config.js');
	var gulp = require('gulp');
	var $ = require('gulp-load-plugins')();
	var browserSync = require('browser-sync');
	var reload = browserSync.reload;

	var name = 'jshint';

	return {
		name: name,
		task: task
	};
	
	//lint files
	function task() {
		return gulp
			.src(config.js)
			.pipe(reload({
				stream: true,
				once: true
			}))
			// .pipe($.jscs())
			.pipe($.jshint())
			.pipe($.jshint.reporter('jshint-stylish'))
			.pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
	}
})();
