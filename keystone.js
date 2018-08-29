// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
		'name': 'MUDr. Helena Filová',
		'brand': 'MUDr. Helena Filová',

		'less': 'public',
		'static': 'public',
		'favicon': 'public/favicon.ico',
		'views': 'templates/views',
		'view engine': '.hbs',

		'custom engine': handlebars.create({
				layoutsDir: 'templates/views/layouts',
				partialsDir: 'templates/views/partials',
				defaultLayout: 'default',
				helpers: new require('./templates/views/helpers')(),
				extname: '.hbs',
		}).engine,

		'auto update': true,
		'session': true,
		'auth': true,
		'user model': 'User',
		//'mongo': process.env.MONGODB_URI,


		'cookie secret': '2ea39d49359ed81f76ac22640af9b6e52c3d1bf3c6bd9728b8a01b16e270021f4178ea474ee53358099b8b926880836c7e60648c75d287648b2366d6fcb3a549'
});


keystone.set('cloudinary config', { cloud_name: 'janosch', api_key: '374969271443423', api_secret: 'HgAtXVTcKwvIclAaCEblyFMHMJM' });


// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
		_: require('lodash'),
		env: keystone.get('env'),
		utils: keystone.utils,
		editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
		Ordinace: 'ordinaces',
	//	Soubory: 'https://drive.google.com/drive/u/0/folders/1I9qVypQYlmE5sU9cddKRgFwe7X6enwSD',
		Blog: ['posts'],
		Správci: 'users',

});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
