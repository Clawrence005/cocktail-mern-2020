const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Cocktail = require('./model/cocktail.model')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/cocktailmern', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
});
const cocktailRoutes = express.Router();
app.use('/cocktails', cocktailRoutes);



cocktailRoutes.route('/').get(function (req, res) {
  Cocktail.find({}, function (err, cocktails) {
    if (err) {
      console.log(err);
    } else {
      res.json(cocktails);
    }
  });
});

cocktailRoutes.route('/create').post(function (req, res) {
  console.log('Got body:', req.body);
  let cocktail = new Cocktail({
    cocktailName: req.body.cocktailName,
    // cocktailId: req.body.cocktailId,
    // userId: req.body.cocktailId,
    isClassic: req.body.isClassic,
    creatorName: req.body.creatorName,
    isShaken: req.body.isShaken,
    isDoubleStrain: req.body.isDoubleStrain,
    details: req.body.details,
    ingredients: req.body.ingredients,
    garnish: req.body.garnish,
    method: req.body.method,
    glass: req.body.glass
  });
  cocktail.save(function (err) {
    if (err) {
      return err;
    }
    // res.send('Product Created successfully');
    res.json(cocktail)
  })
});

cocktailRoutes.route('/all').get(function (req, res) {
  Cocktail.find({}, function (err, cocktails) {
    if (err) {
      console.log(err);
    } else {
      res.json(cocktails);
    }
  });
});

cocktailRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Cocktail.findById(id, function (err, cocktail) {
    res.json(cocktail)
  });
});

//have to update all fields right now
cocktailRoutes.route('/update/:id').post(function (req, res) {
  Cocktail.findById(req.params.id, function (err, cocktail) {
    if (!cocktail)
      res.status(404).send('cocktail with this id not found');
    else
      cocktail.cocktailName = req.body.cocktailName;
    cocktail.isClassic = req.body.isClassic;
    cocktail.creatorName = req.body.creatorName;
    cocktail.isShaken = req.body.isShaken;
    cocktail.details = req.body.details;
    cocktail.ingredients = req.body.ingredients;
    cocktail.garnish = req.body.garnish;
    cocktail.method = req.body.method;
    cocktail.glass = req.body.glass;

    cocktail.save().then(cocktail => {
      res.status(200).json(`cocktail ${cocktail.cocktailName} updated`)
    })


  });
});

cocktailRoutes.route('/delete/:id').delete(function (req, res) {
  Cocktail.findByIdAndRemove(req.params.id, function (err, cocktail) {
    if (!cocktail)
      res.status(404).send('cocktail with this id not found');
    else
      res.status(200).send('cocktail with this id deleted');
  })
});


const userRoutes = express.Router();
app.use('users', userRoutes);




app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});