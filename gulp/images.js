module.exports = (function() {
	var config = require('../build/build.config.js');
	var gulp = require('gulp');
	var $ = require('gulp-load-plugins')();

	var name = 'images';

	/* jshint camelcase:false */
	var webdriverUpdate = $.protractor.webdriver_update;

	return {
		name: name,
		task: task
	};

	// optimize images and put them in the dist folder
	function task() {
		return gulp
			.src(config.images)
			.pipe($.imagemin({
				progressive: true,
				interlaced: true
			}))
			.pipe(gulp.dest(config.dist + '/assets/images'))
			.pipe($.size({
				title: name
			}));
	}
})();
