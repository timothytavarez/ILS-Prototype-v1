(function(){
	'use strict';

	// Authentication service for user variables
	angular /*@ngInject*/
		.module('users')
		.factory('Authentication', Authentication);

	function Authentication() {
		var _this = this;
		_this._data = { user: window.user };
		return _this._data;
	}
})();
