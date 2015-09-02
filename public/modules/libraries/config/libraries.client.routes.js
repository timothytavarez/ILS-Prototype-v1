(function() {
	'use strict';

	//Setting up route
	angular /*@ngInject*/
		.module('libraries')
		.config(config);

	function config($stateProvider) {
		// Libraries state routing
		$stateProvider
			.state('common.listLibraries', {
				url: '/libraries',
				views: {
					'contentView': { 
						templateUrl: 'modules/libraries/views/list-libraries.client.view.html',
						controller: 'LibraryController',
						controllerAs: 'vm'
					}
				}
			})
		.state('common.createLibrary', {
			url: '/libraries/create',
			views: {
				'contentView': { 
					templateUrl: 'modules/libraries/views/create-library.client.view.html',
					controller: 'LibraryController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.viewLibrary', {
			url: '/libraries/:libraryId',
			views: {
				'contentView': { 
					templateUrl: 'modules/libraries/views/view-library.client.view.html',
					controller: 'LibraryController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.editLibrary', {
			url: '/libraries/:libraryId/edit',
			views: {
				'contentView': { 
					templateUrl: 'modules/libraries/views/edit-library.client.view.html',
					controller: 'LibraryController',
					controllerAs: 'vm'
				}
			}
		});
	}
})();
