'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core', ['eehNavigation', 'pascalprecht.translate',
'ui.bootstrap', 'ui.router']);

angular.module ('core').config(['eehNavigationProvider', function (eehNavigationProvider) {
   eehNavigationProvider
   .menuItem('foo.user', {
       text: 'Me',
       iconClass: 'fa-user'
    })
    .menuItem('foo.user.profile', {
    	text: 'User Profile',
    	iconClass: 'fa-user'
    });
    }
]);