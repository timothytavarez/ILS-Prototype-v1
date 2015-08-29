(function() {
	'use strict';

	//Setting up route
	angular /*@ngInject*/
		.module('items')
		.config(config);

	function config($stateProvider) {
		// Items state routing
		$stateProvider
			.state('common.listItems', {
				url: '/items',
				views: {
					'contentView': { 
						templateUrl: 'modules/items/views/list-items.client.view.html',
						controller: 'ItemsController',
						controllerAs: 'vm'
					}
				}
			})
		.state('common.createItem', {
			url: '/items/create',
			views: {
				'contentView': { 
					templateUrl: 'modules/items/views/create-item.client.view.html',
					controller: 'ItemsController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.viewItem', {
			url: '/items/:itemId',
			views: {
				'contentView': { 
					templateUrl: 'modules/items/views/view-item.client.view.html',
					controller: 'ItemsController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.editItem', {
			url: '/items/:itemId/edit',
			views: {
				'contentView': { 
					templateUrl: 'modules/items/views/edit-item.client.view.html',
					controller: 'ItemsController',
					controllerAs: 'vm'
				}
			}
		});
	}
})();
