module.exports = (function() {
	var $ = require('gulp-load-plugins')();

	var name = 'webdriver:update';

	// Update webdriver if necessary.
	// This task will be used by e2e task.

	/* jshint camelcase:false */
	var webdriverUpdate = $.protractor.webdriver_update;

	return {
		name: name,
		task: webdriverUpdate
	};
})();
