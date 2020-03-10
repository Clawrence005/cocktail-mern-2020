const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CocktailSchema = new Schema({

  cocktailName: { type: String },
  cocktailId: { type: String },
  isClassic: { type: Boolean },
  creatorName: { type: String },
  isShaken: { type: Boolean },
  isDoubleStrain: { type: Boolean },
  details: [Schema.Types.Mixed],
  // ingredients: [String],
  ingredients: [Schema.Types.Mixed],
  garnish: { type: String },
  method: { type: String },
  glass: { type: String },
  // image: { type: String, trim: true },
});

// let Cocktail = new Schema({

//   cocktailName: { type: String, trim: true, default: 'mojito' },
//   // date: { type: Date, trim: true, default: Date.now },
//   cocktailId: { type: String },
//   isClassic: { type: Boolean, default: false },
//   creatorName: { type: String, trim: true, default: '' },
//   isShaken: { type: Boolean, default: true },
//   isDoubleStrain: { type: Boolean, default: false },
//   // details: [Schema.Types.Mixed],
//   // ingredients: [String],
//   garnish: { type: String, trim: true },
//   method: { type: String, trim: true },
//   glass: { type: String, trim: true, default: 'rocks glass' },
//   // image: { type: String, trim: true },
// });

module.exports = mongoose.model('Cocktail', CocktailSchema)