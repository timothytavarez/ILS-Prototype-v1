module.exports = (function() {
	var config = require('../build/build.config.js');
	var gulp = require('gulp');
	var $ = require('gulp-load-plugins')();

	var name = 'sass';

	return {
		name: name,
		task: task
	};

	//generate css files from scss sources
	function task() {
		return gulp
			.src(config.mainScss)
			.pipe($.sass())
				.on('error', $.sass.logError)
			.pipe(gulp.dest(config.tmp))
			.pipe($.size({
				title: name
			}));
	}
})();
