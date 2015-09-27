'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../controllers/core.ctrl');
	app.route('/').get(core.index);
	// app.route('/signin').get(core.signin);
};
