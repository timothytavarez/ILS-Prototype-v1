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
						templateUrl: 'app/src/libraries/list-libraries.tmpl.html',
						controller: 'LibraryController',
						controllerAs: 'vm'
					}
				}
			})
		.state('common.createLibrary', {
			url: '/libraries/create',
			views: {
				'contentView': { 
					templateUrl: 'app/src/libraries/create-library.tmpl.html',
					controller: 'LibraryController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.viewLibrary', {
			url: '/libraries/:libraryId',
			views: {
				'contentView': { 
					templateUrl: 'app/src/libraries/view-library.tmpl.html',
					controller: 'LibraryController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.editLibrary', {
			url: '/libraries/:libraryId/edit',
			views: {
				'contentView': { 
					templateUrl: 'app/src/libraries/edit-library.tmpl.html',
					controller: 'LibraryController',
					controllerAs: 'vm'
				}
			}
		});
	}
})();
