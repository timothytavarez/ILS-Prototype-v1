(function() {
	'use strict';

	// Configuring the Items module
	angular /*@ngInject*/
		.module('items')
		.run(run);

	function run(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Items', 'items', 'dropdown', '/items');
		Menus.addSubMenuItem('topbar', 'items', 'List Items', 'items');
		Menus.addSubMenuItem('topbar', 'items', 'New Item', 'items/create');
	}
})();
