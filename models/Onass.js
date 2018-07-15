var keystone = require('keystone');
var Types = keystone.Field.Types;

var Onass = new keystone.list ('Onass',{
  map: {name:'title'},

  autokey: { path: 'slug', from: 'title', unique: true },
});

Onas.add({
  title: {type: String, required: true},
  price: {type: Number},
  qty: {type: Number},
  description: {type: Type.Html, wysiwyg: true, height: 300},
  image: {type: Type.CloudinaryImage},
  publishedDate: {type: Date, default: Date.now}
})

Onass.register();
