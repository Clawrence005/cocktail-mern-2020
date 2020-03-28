const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// let IngredientSchema = new Schema({
//   ing: String,
//   meas: String
// });

let CocktailSchema = new Schema({
  // date: { type: Date, trim: true, default: Date.now },
  cocktailName: { type: String },
  // cocktailId: [UserSchema], 
  creatorName: { type: String },
  // author: {
  //   type: Schema.Types.ObjectId, ref: 'User'
  // },
  cocktailImage: [Schema.Types.Mixed],

  isClassic: { type: Boolean },
  isShaken: { type: Boolean },
  isDoubleStrain: { type: Boolean },

  details: [Schema.Types.Mixed],
  // ingredients: [String],
  // ingredients: [{
  //   ing: String,
  //   meas: String
  // }],
  ingredients: [Schema.Types.Mixed],
  method: { type: String },

  garnish: { type: String },
  glass: { type: String },
  chosenColor: { type: String }

  // image: { type: String, trim: true },
}, { timestamps: true });


// const Cocktail = mongoose.model('Cocktail', CocktailSchema, 'cocktails');
// const User = mongoose.model('User', UserSchema, 'users');

module.exports = mongoose.model('Cocktail', CocktailSchema)