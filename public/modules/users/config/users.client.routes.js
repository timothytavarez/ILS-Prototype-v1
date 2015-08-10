'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
  function($stateProvider) {
    // Users state routing
    $stateProvider.
		state('view-role', {
			url: '/rolesroleid',
			templateUrl: 'modules/users/views/view-role.client.view.html'
		}).
		state('list-roles', {
			url: '/roles',
			templateUrl: 'modules/users/views/list-roles.client.view.html'
		}).
		state('edit-role', {
			url: '/rolesroleid',
			templateUrl: 'modules/users/views/edit-role.client.view.html'
		}).
		state('create-role', {
			url: '/roles',
			templateUrl: 'modules/users/views/create-role.client.view.html'
		}).
      state('profile', {
        url: '/settings/profile',
        templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
      }).
      state('password', {
        url: '/settings/password',
        templateUrl: 'modules/users/views/settings/change-password.client.view.html'
      }).
      state('accounts', {
        url: '/settings/accounts',
        templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
      }).
      state('signup', {
        url: '/signup',
        templateUrl: 'modules/users/views/authentication/signup.client.view.html'
      }).
      state('signin', {
        url: '/signin',
       views: {
          'contentView': {
        templateUrl: 'modules/users/views/authentication/signin.client.view.html'
        }}
      }).
      state('forgot', {
        url: '/password/forgot',
        templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
      }).
      state('reset-invalid', {
        url: '/password/reset/invalid',
        templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
      }).
      state('reset-success', {
        url: '/password/reset/success',
        templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
      }).
      state('reset', {
        url: '/password/reset/:token',
        templateUrl: 'modules/users/views/password/reset-password.client.view.html'
      }).
      state('listUsers', {
        url: '/users',
        templateUrl: 'modules/users/views/administration/list-users.client.view.html'
      }).
      state('viewUser', {
        url: '/users/:userId',
        templateUrl: 'modules/users/views/administration/view-user.client.view.html'
      }).
      state('editUser', {
        url: '/users/:userId/edit',
        templateUrl: 'modules/users/views/administration/edit-user.client.view.html'
      });
  }
]);
