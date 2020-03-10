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

mongoose.connect('mongodb://127.0.0.1:27017/cocktailmern', { useUnifiedTopology: true, useNewUrlParser: true });


// mongoose.connect(process.env.test_db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
});
const cocktailRoutes = express.Router();
app.use('/cocktails', cocktailRoutes);

// cocktailRoutes.route('/').get(function (req, res) {
//   Cocktail.find(function (err, cocktails) {
//     if (err) {
//       console.log(err)
//     } else {
//       res.json(cocktails)
//     }
//   });
// });

// app.get('/home/', function (req, res) {
//   res.send('GET request to the cocktail homepage')
// });

cocktailRoutes.route('/').get(function (req, res) {
  Cocktail.find({}, function (err, cocktails) {
    if (err) {
      console.log(err);
    } else {
      res.json(cocktails);
    }
  });
});



app.post('/cocktails/create', (req, res) => {
  console.log('Got body:', req.body);
  let cocktail = new Cocktail({
    cocktailName: req.body.cocktailName,
    // cocktailId: req.body.cocktailId,
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
// cocktailRoutes.route('/create').post(function (req, res) {
//   let cocktail = new Cocktail({
//     cocktailName: req.body.cocktailName,
//     glass: req.body.glass,
//   });
//   this.cocktail.save(function (err) {
//     if (err) {
//       return (err);
//     }
//     res.json(cocktail);
//   })
// });
//   
//   cocktail.save(function (err) {
//     if (err) { return (err) }

//     res.json({ cocktail });
//   });
// });

// app.post('/cocktails/create', function (req, res) {
//   req.collection.insert(req.body, {}, function (e, results) {
//     if (e) return
//     res.send(results)
//   })
// })

// cocktailRoutes.route('/create').post(function (req, res, next) {
//   console.log(req.body.cocktail);
//   let cocktail = new Cocktail();

//   cocktail.cocktailName = req.body.cocktailName;
//   // cocktail.cocktailId = req.body.cocktailId;
//   // cocktail.isClassic = req.body.isClassic;
//   // cocktail.creatorName = req.body.creatorName;
//   // cocktail.isShaken = req.body.isShaken;
//   // cocktail.isDoubleStrain = req.body.isDoubleStrain;
//   // details= req.body.details,
//   // ingredients= req.body.ingredients,
//   // cocktail.garnish = req.body.garnish;
//   // cocktail.method = req.body.method;
//   // cocktail.glass = req.body.glass;


//   cocktail.save(function (err) {
//     if (err) { return next(err) }

//     res.json({ cocktail });
//   });
// });


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


cocktailRoutes.route('/update-id/:id').post(function (req, res) {
  Cocktail.findById(req.params.id, function (err, cocktail) {
    if (!cocktail)
      res.status(404).send('data not found');
    else
      cocktail.cocktailName = req.body.cocktailName;
    cocktail.cocktailId = req.body.cocktailId;
    cocktail.creatorName = req.body.creatorName;
    cocktail.isShaken = req.body.isShaken;
    cocktail.ingredients = req.body.ingredients;
    cocktail.garnish = req.body.garnish;
    cocktail.method = req.body.method;
    cocktail.glass = req.body.glass;

    cocktail.save().then(cocktail => {
      res.json(`cocktail ${cocktail.cocktailName} updated`)
    })


  });
});



// const connection = mongoose.connection;
// connection.once('open', function () {
//   console.log("MongoDB database connection established successfully");
// });

// app.use('/cocktails', cocktailRoutes);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});