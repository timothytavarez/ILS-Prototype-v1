'use strict';


/*@ngInject*/
angular.module('core').controller('SidebarController',
    function($scope, Authentication) {
        
    // This provides Authentication context.
    $scope.authentication = Authentication;
    }
);
