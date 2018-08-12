var keystone = require('keystone');
exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  // Set locals
  //locals.section = 'onas';

  locals.onas = view.query('pageOnas', keystone.list('Onas').model.find());
  // Load
//  view.query('pageOnas', keystone.list('Onas').model.find());

  // Render View
  view.render('pageOnas');
}
