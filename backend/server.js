// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const PORT = 4000;
// const cors = require('cors');
// const config = require('./DB');
// const ServerPortRouter = require('./routes/ServerPortRouter');

// mongoose.connect(config.DB).then(
//     () => {console.log('Database is connected') },
//     err => { console.log('Can not connect to the database' +err)
// });

// app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// app.use('/serverport', ServerPortRouter);

// app.listen(PORT, function(){
//   console.log('Server is running on Port: ',PORT);
// });
//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Cocktail = require('./model/cocktail.model')
let User = require('./model/user.model')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/cocktailmern', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.set('useCreateIndex', true);

const connection = mongoose.connection;
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
    image: req.body.image,
  });
  user.save(function (err) {
    if (err) {
      return err;
    }
    res.json(user)
  });
});

// update
// userRoutes.route().put();

// delete
// userRoutes.route().delete();

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});