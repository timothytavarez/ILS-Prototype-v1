'use strict';

// Configuring the Articles module
/*@ngInject*/
angular.module('items').run(
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Items', 'items', 'dropdown', '/items');
		Menus.addSubMenuItem('topbar', 'items', 'List Items', 'items');
		Menus.addSubMenuItem('topbar', 'items', 'New Item', 'items/create');
	}
);
