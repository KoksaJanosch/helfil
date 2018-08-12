var keystone = require('keystone');
var Types = keystone.Field.Types;

var Kontakt = new keystone.List('Kontakt', {
  map: {name: 'title'},
  autokey: {path: 'slug', from: 'title', unique: true},
  singular: 'Kontakt',
  plural: 'Kontakt'
});

Kontakt.add({
  title: {type: String, requried: true},
  ulice: {type: String, requried: true},
  mesto: {type: String, requried: true},
  mobil: {type: String, requried: true},
  telefon: {type: String, requried: true},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  //image: {type: Types.CloudinaryImage},
  //publishedDate: {type: Date, default: Date.now}
});

//Kontakt.defaultColumns = 'pondeliDopoledne, pondeliOdpoledne|10%, uteryDopoledne,uteryOdpoledne,uteryPopis|20%, publishedDate|20%';
Kontakt.register();
