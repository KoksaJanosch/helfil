var keystone = require('keystone');
var Types = keystone.Field.Types;

var Cenik = new keystone.List('Cenik', {
  map: {name: 'title'},
  autokey: {path: 'slug', from: 'title', unique: true},
  singular: 'Ceník',
  plural: 'Ceník'
});

Cenik.add({
  title: {type: String, requried: true},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  vykon1: {type: String},
      cena1: {type: String},
  vykon2: {type: String},
      cena2: {type: String},
  vykon3: {type: String},
      cena3: {type: String},
  vykon4: {type: String},
      cena4: {type: String},
  vykon5: {type: String},
      cena5: {type: String},
  vykon6: {type: String},
      cena6: {type: String},
  vykon7: {type: String},
      cena7: {type: String},
  vykon8: {type: String},
      cena8: {type: String},
  vykon9: {type: String},
      cena9: {type: String},
  vykon10: {type: String},
      cena10: {type: String},
  vykon11: {type: String},
      cena11: {type: String},
  vykon12: {type: String},
      cena12: {type: String},
  vykon13: {type: String},
      cena13: {type: String},
  vykon14: {type: String},
      cena14: {type: String},
  vykon15: {type: String},
      cena15: {type: String},
  vykon16: {type: String},
      cena16: {type: String},
  vykon17: {type: String},
      cena17: {type: String},
  datum: {type: String, requried: true},
//  image: {type: Types.CloudinaryImage},
//  publishedDate: {type: Date, default: Date.now}
});

Cenik.register();
