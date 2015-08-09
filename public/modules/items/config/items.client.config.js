'use strict';

// Configuring the Articles module
angular.module('items').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Items', 'items', 'dropdown', '/items');
		Menus.addSubMenuItem('topbar', 'items', 'List Items', 'listItems');
		Menus.addSubMenuItem('topbar', 'items', 'New Item', 'createItem');
	}
]);
