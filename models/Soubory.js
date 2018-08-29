var keystone = require('keystone');
var Types = keystone.Field.Types;

var Soubory = new keystone.List('Soubory', {
  map: {name: 'title'},
  autokey: {path: 'slug', from: 'title', unique: true},
  singular: 'Soubory',
  plural: 'Soubory'
});

Soubory.add({
  title: {type: String, requried: true},
  aktualniInformace: {type: Types.Html, wysiwyg: true, height: 100, max: 140, requried: true},
  dovolenaPopis: {type: Types.Html, wysiwyg: true, height: 100, requried: true},

});

//Ordinace.defaultColumns = 'pondeliDopoledne, pondeliOdpoledne|10%, uteryDopoledne,uteryOdpoledne,uteryPopis|20%, publishedDate|20%';
Soubory.register();
