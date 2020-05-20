const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator');

let UserSchema = new Schema({
  // validators need a plugin in mongoose
  // userName: { type: String, required: [true, "user name can not be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], unique: true},
  // email: { type: String,required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], unique: true},
  userName: { type: String,/* required: true, unique: true,*/ max: 30 },
  // cocktails: [{ type: Schema.Types.ObjectId, ref: 'Cocktail' }],
  email: { type: String, /*required: true, unique: true,*/ max: 60 },
  bio: { type: String, required: false, max: 600 },
  userImage: { type: String, required: true, default: './assets/img/defaultAvatar.svg' },

}, { timestamps: true });

// const Cocktail = mongoose.model('Cocktail',CocktailSchema, 'cocktails');
// const User = mongoose.model('User', UserSchema, 'users');

module.exports = mongoose.model('User', UserSchema)