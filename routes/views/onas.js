var keystonej = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  //Set locals
  locals.section = 'page';

  //Load Products
  view.query('onas', keystone.list('Onas').model().find());

  //Render View
  view.render('onas');
}
