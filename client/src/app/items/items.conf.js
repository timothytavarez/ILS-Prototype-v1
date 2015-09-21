(function() {
	'use strict';

	// Configuring the Items module
	angular /*@ngInject*/
		.module('items')
		.config(config)
		.run(run);

	function config($stateProvider) {
		// Items state routing
		$stateProvider
			.state('common.listItems', {
				url: '/items',
				views: {
					'contentView': { 
						templateUrl: 'src/app/items/list-items.tmpl.html',
						controller: 'ItemsController',
						controllerAs: 'vm'
					}
				}
			})
		.state('common.createItem', {
			url: '/items/create',
			views: {
				'contentView': { 
					templateUrl: 'src/app/items/create-item.tmpl.html',
					controller: 'ItemsController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.viewItem', {
			url: '/items/:itemId',
			views: {
				'contentView': { 
					templateUrl: 'src/app/items/view-item.tmpl.html',
					controller: 'ItemsController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.editItem', {
			url: '/items/:itemId/edit',
			views: {
				'contentView': { 
					templateUrl: 'src/app/items/edit-item.tmpl.html',
					controller: 'ItemsController',
					controllerAs: 'vm'
				}
			}
		});
	}

	function run(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'items', 'items', 'dropdown', '/items');
		Menus.addSubMenuItem('topbar', 'items', 'list items', 'items');
		Menus.addSubMenuItem('topbar', 'items', 'new item', 'items/create');
	}
})();
