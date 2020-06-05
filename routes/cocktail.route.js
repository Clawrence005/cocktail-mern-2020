
let cocktailRouter = require('express').Router();
let Cocktail = require('./../model/cocktail.model');
// let User = require('./../model/user.model');
var User = require('mongoose').model('User');

cocktailRouter.route('/').get(function (req, res) {
  Cocktail.find({})
    .populate('creatorName', ['userName'])
    .exec().then(function (err, cocktails, ) {
      if (err) {
        console.log(err);
      } else {
        res.json(cocktails);
      }
    })
});


cocktailRouter.route('/create').post(function (req, res) {
  console.log('Got body:', req.body);
  let cocktail = new Cocktail({
    cocktailName: req.body.cocktailName,

    creatorName: req.body.creatorName,

    cocktailImage: req.body.cocktailImage,
    isClassic: req.body.isClassic,
    isShaken: req.body.isShaken,
    isDoubleStrain: req.body.isDoubleStrain,
    details: req.body.details,
    ingredients: req.body.ingredients,
    method: req.body.method,
    garnish: req.body.garnish,

    glass: req.body.glass,
    chosenColor: req.body.chosenColor,
  });
  cocktail.save(function (err) {
    if (err) {
      return err;
    }
    // res.send('Product Created successfully');
    res.json(cocktail)
  })
});

// cocktailRoutes.route('/all').get(function (req, res) {
//   Cocktail.find({}, function (err, cocktails) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(cocktails);
//     }
//   });
// });

cocktailRouter.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Cocktail.findById(id, function (err, cocktail) {
    res.json(cocktail)
  });
});

//have to update all fields right now
cocktailRouter.route('/update/:id').put(function (req, res) {
  Cocktail.findById(req.params.id, function (err, cocktail) {
    if (!cocktail)
      res.status(404).send('cocktail with this id not found');
    else
      cocktail.cocktailName = req.body.cocktailName;
    cocktail.creatorName = req.body.creatorName;
    cocktail.cocktailImage = req.body.cocktailImage;
    cocktail.isClassic = req.body.isClassic;
    cocktail.isShaken = req.body.isShaken;
    cocktail.details = req.body.details;
    cocktail.ingredients = req.body.ingredients;
    cocktail.garnish = req.body.garnish;
    cocktail.method = req.body.method;
    cocktail.glass = req.body.glass;
    cocktail.chosenColor = req.body.chosenColor;

    cocktail.save().then(cocktail => {
      res.status(200).json(`cocktail ${cocktail.cocktailName} updated`)
    });
  });
});

cocktailRouter.route('/delete/:id').delete(function (req, res) {
  Cocktail.findByIdAndRemove(req.params.id, function (err, cocktail) {
    if (!cocktail)
      res.status(404).send('cocktail with this id not found');
    else
      res.status(200).send('cocktail with this id deleted');
  })
});


module.exports = cocktailRouter;