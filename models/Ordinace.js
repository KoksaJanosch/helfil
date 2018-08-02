var keystone = require('keystone');
var Types = keystone.Field.Types;

var Ordinace = new keystone.List('Ordinace', {
  map: {name: 'title'},
  autokey: {path: 'slug', from: 'title', unique: true},
  singular: 'Ordinace',
  plural: 'Ordinace'
});

Ordinace.add({
  title: {type: String, requried: true},
  pondeliDopoledne: {type: String,requried: true},
  pondeliOdpoledne: {type: String,requried: true},
  pondeliPopis: {type: String,requried: true},
  uteryDopoledne: {type: String,requried: true},
  uteryOdpoledne: {type: String,requried: true},
  uteryPopis: {type: String,requried: true},
  stredaDopoledne: {type: String,requried: true},
  stredaOdpoledne: {type: String,requried: true},
  stredaPopis: {type: String,requried: true},
  ctvrtekDopoledne: {type: String,requried: true},
  ctvrtekOdpoledne: {type: String,requried: true},
  ctvrtekPopis: {type: String,requried: true},
  patekDopoledne: {type: String,requried: true},
  patekOdpoledne: {type: String,requried: true},
  patekPopis: {type: String,requried: true},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  image: {type: Types.CloudinaryImage},
  publishedDate: {type: Date, default: Date.now}
});

Ordinace.register();
