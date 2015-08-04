'use strict';


angular.module('core').controller('SidebarController', ['$scope', 'Authentication',
    function($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    }
]);