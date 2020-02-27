const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Cocktail = require('./model/cocktail.model')

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

mongoose.connect('mongodb://127.0.0.1:27017/cocktailmern', { useUnifiedTopology: true, useNewUrlParser: true });

// mongoose.connect(process.env.test_db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


const cocktailRoutes = express.Router();

app.use('./cocktails', cocktailRoutes);

cocktailRoutes.route('/').get(function (req, res) {
  Cocktail.find(function (err, cocktails) {
    if (err) {
      console.log(err)
    } else {
      res.json(cocktails)
    }
  })
})





const connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
})