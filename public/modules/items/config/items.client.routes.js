'use strict';

//Setting up route
angular.module('items').config(['$stateProvider',
	function($stateProvider) {
		// Items state routing
		$stateProvider.
		state('listItems', {
			url: '/items',
			views: {
			  'contentView': {
			templateUrl: 'modules/items/views/list-items.client.view.html'
			  },
			  'sidebarView' : {
         templateUrl: 'modules/core/views/sidebar.client.view.html' 
			  }}
		}).
		state('createItem', {
			url: '/items/create',
			views: {
			  'contentView': {
			templateUrl: 'modules/items/views/create-item.client.view.html'
			  },
			  'sidebarView' : {
         templateUrl: 'modules/core/views/sidebar.client.view.html' 
			  }}
		}).
		state('viewItem', {
			url: '/items/:itemId',
			views: {
			  'contentView': {
			templateUrl: 'modules/items/views/view-item.client.view.html'
			  },
			  'sidebarView' : {
         templateUrl: 'modules/core/views/sidebar.client.view.html' 
			  }}
		}).
		state('editItem', {
			url: '/items/:itemId/edit',
			views: {
			  'contentView': {
			templateUrl: 'modules/items/views/edit-item.client.view.html'
			  },
			  'sidebarView' : {
         templateUrl: 'modules/core/views/sidebar.client.view.html' 
			  }}
		});
	}
]);
