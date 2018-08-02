var keystone = require('keystone');
var Types = keystone.Field.Types;

var Onas = new keystone.List('Onas', {
  map: {name: 'title'},
  autokey: {path: 'slug', from: 'title', unique: true},
  singular: 'O nás',
  plural: 'O nás'
});

Onas.add({
  title: {type: String, requried: true},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  image: {type: Types.CloudinaryImage},
//  publishedDate: {type: Date, default: Date.now}
});

Onas.register();
