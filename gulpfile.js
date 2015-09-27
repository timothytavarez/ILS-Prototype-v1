'use strict';

// var config = require('./build/build.config.js');
// var karma = require('karma').server;
// var karmaConfig = require('./build/karma.config.js');
// var protractorConfig = require('./build/protractor.config.js');
// var $ = require('gulp-load-plugins')();
// var runSequence = require('run-sequence');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;
// var pkg = require('./package');
// var del = require('del');
// var _ = require('lodash');
var gulp = require('gulp');
var taskList = require('./gulp');

var keys = Object.keys(taskList);
var t;
for (var i = 0; i < keys.length; i++) {
	t = taskList[keys[i]];
	gulp.task(t.name, t.deps, t.task);
}
