var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'kontakt';

  // Load
  view.query('pageKontakt', keystone.list('Kontakt').model.find());

  // Render View
  view.render('pageKontakt');
}
