'use strict';

module.exports = {
	app: {
		title: 'Muse',
		description: 'Modern SaaS Library Solution using the MEAN stack.',
		keywords: 'MongoDB, Express, AngularJS, Node.JS'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'aardvark',
	sessionCollection: 'sessions',

	// General Project File Paths
	index: './app/views/index.server.view.html',
	temp: './temp/',
	maps: './maps/',
	dist: './public/dist/',

	projAssets: {
		// View File Paths
		serverViews: ['app/views/**/*.*'],
		clientViews: ['public/modules/**/views/**/*.html'],

		// Stylesheet File Paths
		scss: [
			'app/scss/*.scss', 'public/scss/*.scss'
		],

		// Javascript File Paths
		serverJS: [
			'gruntfile.js', 
			'server.js', 
			'config/**/*.js', 
			'app/**/*.js'
		],

		clientJS: [
			'public/modules/**/*.js',
			'public/js/*.js' 
		],

		// Test File Paths
		mochaTests: [
			'app/tests/**/*.js'
		]
	},


	injectAssets: {
		// Vendor Library File Paths
		lib: {
			css: [
				'client/src/vendor/bootstrap/dist/css/bootstrap.css',
				'client/src/vendor/bootstrap/dist/css/bootstrap-theme.css',
				'client/src/vendor/font-awesome/css/font-awesome.css'
			],
			js: [
				'client/src/vendor/jquery/dist/jquery.js',
				'client/src/vendor/bootstrap/dist/js/bootstrap.js',
				'client/src/vendor/bundle.js',
				'client/src/vendor/angular/angular.js',
				'client/src/vendor/angular-bootstrap/ui-bootstrap.js',
				'client/src/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
				'client/src/vendor/angular-resource/angular-resource.js', 
				'client/src/vendor/angular-cookies/angular-cookies.js', 
				'client/src/vendor/angular-animate/angular-animate.js', 
				'client/src/vendor/angular-touch/angular-touch.js', 
				'client/src/vendor/angular-sanitize/angular-sanitize.js',
				'client/src/vendor/angular-translate/angular-translate.js',
				'client/src/vendor/angular-ui-router/release/angular-ui-router.js',
				'client/src/vendor/angular-ui-utils/index.js',
				'client/src/vendor/angular-ui-scroll/dist/ui-scroll.js',
				'client/src/vendor/angular-ui-scrollpoint/dist/scrollpoint.js',
				'client/src/vendor/angular-ui-event/dist/event.js',
				'client/src/vendor/angular-ui-mask/dist/mask.js',
				'client/src/vendor/angular-ui-validate/dist/validate.js',
				'client/src/vendor/angular-ui-indeterminate/dist/indeterminate.js',
				'client/src/vendor/angular-ui-uploader/dist/uploader.js'
			]
		},

		// Our Asset File Paths
		css: [
			'client/src/app/**/css/*.css',
			'client/src/common/**/css/*.css',
			'client/assets/css/*.css'
		],

		js: [
			'client/src/app/app.js',						// angular entry point

			'client/src/common/**/*.mdul.js',
			'client/src/common/**/*.svce.js',
			'client/src/common/**/*.conf.js',
			'client/src/common/**/*.ctrl.js',

			'client/src/app/**/*.mdul.js',			// modules
			'client/src/app/**/*.svce.js',			// services/factories
			'client/src/app/**/*.conf.js',			// configs
			'client/src/app/**/*.ctrl.js'				// controllers

		// 	'client/src#<{(|#<{(|[!tests]|)}>#*.js'
		],

		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
