const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cocktail = new Schema({

  cocktailName: { type: String, trim: true },
  date: { type: Date, trim: true, default: Date.now },
  cocktailId: { type: String },
  isClassic: { type: Boolean, default: false },
  creatorName: { type: String, trim: true, default: '' },
  isShaken: { type: Boolean, default: true },
  isDoubleStrain: { type: Boolean, default: false },
  details: [Schema.Types.Mixed],
  ingredients: [String],
  garnish: { type: String, trim: true },
  method: { type: String, trim: true },
  glass: { type: String, trim: true, default: 'rocks glass' },
  image: { type: String, trim: true },
});

module.exports = mongoose.model('Cocktail', Cocktail)