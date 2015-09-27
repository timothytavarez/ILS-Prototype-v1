module.exports = (function() {
	var config = require('../build/build.config.js');
	var gulp = require('gulp');
	var $ = require('gulp-load-plugins')();

	var name = 'copy:assets';

	return {
		name: name,
		task: task
	};


	//copy assets in dist folder
	function task() {
		return gulp
			.src(config.assets, {
				dot: true
			})
			.pipe(gulp.dest(config.dist + '/assets'))
			.pipe($.size({
				title: name
			}));
	}
})();

