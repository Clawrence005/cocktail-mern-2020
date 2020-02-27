const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cocktail = new Schema({

  cocktailName: { type: String },
  date: { type: Date, default: Date.now },
  cocktailId: { type: String },
  isClassic: { type: Boolean },
  creatorName: { type: String },
  isShaken: { type: Boolean },
  isDoubleStrain: { type: Boolean },
  details: [Schema.Types.Mixed],
  ingredients: [String],
  garnish: { type: String },
  method: { type: String },
  glass: { type: String },
  image: { type: String },
});

module.exports = mongoose.model('Cocktail', Cocktail)