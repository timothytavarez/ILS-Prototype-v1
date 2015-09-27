'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.dbURI, config.dbOpts, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

mongoose.connection.on('connected', function() {
	// Init the express application
	var app = require('./config/express')(db);

	// Bootstrap passport config
	require('./config/passport')();

	// Start the app by listening on <port>
	app.listen(config.port);

	// Expose app
	exports = module.exports = app;

	// Logging initialization
	console.log('Server listening on port: ' + config.port);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
	console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
	console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
	mongoose.connection.close(function () { 
		console.log('Mongoose default connection disconnected through app termination'); 
		process.exit(0); 
	}); 
});
