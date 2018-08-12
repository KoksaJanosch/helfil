var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'ordinace';


  // Load
  locals.ordinceI = view.query('pageOrdinace', keystone.list('Ordinace').model.find());


  // Render View
  view.render('pageOrdinace');
}
