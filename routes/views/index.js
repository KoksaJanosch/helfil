var keystone = require('keystone');

exports = module.exports = function (req, res) {

		var view = new keystone.View(req, res);
		var locals = res.locals;

		// locals.section is used to set the currently selected
		// item in the header navigation.
		locals.section = 'home';

		// Load other posts
		view.on('init', function (next) {
				var q = keystone.list('Ordinace').model.find();
				q.exec(function (err, results) {
						locals.ordinace = results[0];
						next(err);
				});
		});
		// Render the view
		view.render('index');
};
