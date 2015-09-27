module.exports = (function() {
	var config = require('../build/build.config.js');
	var pkg = require('../package');
	var gulp = require('gulp');
	var browserSync = require('browser-sync');
	var reload = browserSync.reload;

	var build = require('./build').name;
	var nodemon = require('./nodemon').name;
	var sass = require('./sass').name;
	var jshint = require('./jshint').name;
	var templates = require('./templates').name;

	var name = 'serve';
	var deps = [build, nodemon];

	return {
		name: name,
		deps: deps,
		task: task
	};

	//run the server after having built generated files, and watch for changes
	function task(cb) {
		browserSync({
			proxy: {
				target: "http://localhost:" + config.port,
				ws: true
			},
 			port: config.syncPort,
			notify: true,
			logPrefix: pkg.name,
			files: config.clientFiles
		});

		gulp.watch(config.html, reload);
		gulp.watch(config.scss, [sass, reload]);
		gulp.watch(config.js, [jshint]);
		gulp.watch(config.tpl, [templates, reload]);
		gulp.watch(config.assets, reload);
	}
})();
