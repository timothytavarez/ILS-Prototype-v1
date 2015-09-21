module.exports = (function() {
	var config = require('../build/build.config.js');
	var pkg = require('../package');
	var gulp = require('gulp');
	var $ = require('gulp-load-plugins')();

	var name = 'html';

	return {
		name: name,
		task: task
	};

	//generate a minified css files, 2 js file, change theirs name to be unique, and generate sourcemaps
	function task() {
		var assets = $.useref.assets({
			searchPath: '{build,client}'
		});

		return gulp
			.src(config.index)
			.pipe(assets)
			.pipe($.sourcemaps.init())
			.pipe($.if('**/*main.js', $.ngAnnotate()))
			.pipe($.if('*.js', $.uglify({
				mangle: false,
			})))
			.pipe($.if('*.css', $.csso()))
			.pipe($.if(['**/*main.js', '**/*main.css'], $.header(config.banner, {
				pkg: pkg
			})))
			.pipe($.rev())
			.pipe(assets.restore())
			.pipe($.useref())
			.pipe($.revReplace())
			.pipe($.if('*.html', $.minifyHtml({
				empty: true
			})))
			.pipe($.sourcemaps.write())
			.pipe(gulp.dest(config.dist))
			.pipe($.size({
				title: name
			}));
	}
})();
