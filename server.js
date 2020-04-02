if (process.env.NODE_ENV !== 'development') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

let Cocktail = require('./model/cocktail.model')
let User = require('./model/user.model')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.set('useCreateIndex', true);


const connection = mongoose.connection;
connection.on('error', error => console.error(error));
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
});
const cocktailRoutes = express.Router();
app.use('/cocktails', cocktailRoutes);

const userRoutes = express.Router();
app.use('/users', userRoutes);

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

cocktailRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Cocktail.findById(id, function (err, cocktail) {
    res.json(cocktail)
  });
});

//have to update all fields right now
cocktailRoutes.route('/update/:id').put(function (req, res) {
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

cocktailRoutes.route('/delete/:id').delete(function (req, res) {
  Cocktail.findByIdAndRemove(req.params.id, function (err, cocktail) {
    if (!cocktail)
      res.status(404).send('cocktail with this id not found');
    else
      res.status(200).send('cocktail with this id deleted');
  })
});

// read
userRoutes.route('/').get(function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log(err);
    }
    else {
      res.status(200).json(users)
    }
  })
});
// create
userRoutes.route('/create').post(function (req, res) {
  console.log('Got body:', req.body);
  let user = new User({
    userName: req.body.userName,
    email: req.body.email,
    bio: req.body.bio,
    imageName: req.body.image,
  });
  user.save(function (err) {
    if (err) {
      return err;
    }
    res.json(user)
  });
});

// update user
userRoutes.route('/update/:id').put(function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (!user)
      res.status(404).send('user with id not found')
    else
      user.userName = req.body.userName;
    user.email = req.body.email;
    user.bio = req.body.bio;
    user.userImage = req.body.userImage;

    user.save().then(user => {
      res.status(200).json(`user ${user._id} /${user.userName} updated`)
    })
  })
});

// delete user
userRoutes.route('/delete/:id').delete(function (req, res) {
  User.findOneAndRemove(req.params.id, function (err, user) {
    if (!user)
      res.status(404).send('user with this id not found');
    else
      res.status(200).send('user with this id deleted')
  })
});

app.listen(process.env.PORT || PORT, function () {
  console.log("Server is running on Port: " + PORT);
});