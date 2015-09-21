module.exports = (function() {
	var config = require('../build/build.config.js');
	var gulp = require('gulp');
	var $ = require('gulp-load-plugins')();

	var name = 'copy';

	return {
		name: name,
		task: task
	};

	//copy assets in dist folder
	function task() {
	  return gulp.src([
      config.base + '/*',
      '!' + config.base + '/*.html',
      '!' + config.base + '/src',
      '!' + config.base + '/test'
    ]).pipe(gulp.dest(config.dist))
    .pipe($.size({
      title: name
    }));
	}
})();

