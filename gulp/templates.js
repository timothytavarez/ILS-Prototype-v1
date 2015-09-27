module.exports = (function() {
	var config = require('../build/build.config.js');
	var gulp = require('gulp');
	var $ = require('gulp-load-plugins')();

	var name = 'templates';

	return {
		name: name,
		task: task
	};


	//generate angular templates using html2js
	function task() {
		return gulp
			.src(config.tpl)
			.pipe($.changed(config.tmp))
			.pipe($.html2js({
				outputModuleName: 'templates',
				base: 'client',
				useStrict: true
			}))
			.pipe($.concat('templates.js'))
			.pipe(gulp.dest(config.tmp))
			.pipe($.size({
				title: name
			}));
	}
})();

