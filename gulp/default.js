module.exports = (function() {
	var serve = require('./serve').name;

	var name = 'default';
	
	//default task is set to serve
	var deps = [serve];

	return {
		name: name,
		deps: deps
	};
})();

