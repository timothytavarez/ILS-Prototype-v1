'use strict';

module.exports = function(app) {
	var users = require('../controllers/users.ctrl');
	var roles = require('../controllers/roles.ctrl');

	// Roles Routes
	app.route('/roles/rights')
		.get(roles.getAllOptions);

	app.route('/roles')
		.get(roles.list)
		.post(users.requiresLogin, roles.create);

	app.route('/roles/:roleId')
		.get(roles.read)
		.put(users.requiresLogin, roles.hasAuthorization, roles.update)
		.delete(users.requiresLogin, roles.hasAuthorization, roles.delete);

	// Finish by binding the Role middleware
	app.param('roleId', roles.roleByID);
};
