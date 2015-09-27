(function() {
  'use strict';

  angular.module('common')
    .factory('DataService', dataService);

  function dataService() {
    return {
      get: function() {
        return ['some', 'data'];
      }
    };
  }

})();
