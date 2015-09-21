(function() {
  'use strict';

  angular.module('common')
    .controller('FooterController', FooterController);

  function FooterController($log) {
    $log.debug('Footer loaded');
  }
})();
