'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/muse',
	injectAssets: {
		lib: {
			css: [
				'client/src/vendor/bootstrap/dist/css/bootstrap.min.css',
				'client/src/vendor/bootstrap/dist/css/bootstrap-theme.min.css',
			],
			js: [
				'client/src/vendor/angular/angular.min.js',
				'client/src/vendor/angular-resource/angular-resource.js', 
				'client/src/vendor/angular-cookies/angular-cookies.js', 
				'client/src/vendor/angular-animate/angular-animate.js', 
				'client/src/vendor/angular-touch/angular-touch.js', 
				'client/src/vendor/angular-sanitize/angular-sanitize.js', 
				'client/src/vendor/angular-ui-router/release/angular-ui-router.min.js',
				'client/src/vendor/angular-ui-utils/ui-utils.min.js',
				'client/src/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js'
			]
		},
		css: 'build/dist/app.min.css',
		js: 'build/dist/app.min.js'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
