'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var items = require('../../app/controllers/items.server.controller');

	// Items Routes
	app.route('/items')
		.get(items.list)
		.post(users.requiresLogin, items.create);

	app.route('/items/:itemId')
		.get(items.read)
		.put(users.requiresLogin, items.hasAuthorization, items.update)
		.delete(users.requiresLogin, items.hasAuthorization, items.delete);
	app.route('/items/:itemId/checkOut')
		.put(users.requiresLogin, items.hasAuthorization, items.checkOut);
	app.route('/items/:itemId/checkIn')
		.put(users.requiresLogin, items.hasAuthorization, items.checkIn);
	app.route('/items/:itemId/renew')
		.put(users.requiresLogin, items.hasAuthorization, items.renew);
	app.route('/items/:itemId/hold')
		.put(users.requiresLogin, items.hasAuthorization, items.hold);

	// Finish by binding the Item middleware
	app.param('itemId', items.itemByID);
};
