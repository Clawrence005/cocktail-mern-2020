if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const path = require('path')
const colors = require('colors');
require('dotenv').config();

let Cocktail = require('./model/cocktail.model')
let User = require('./model/user.model')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var userRouter = require('./routes/user.route');
var cocktailRouter = require('./routes/cocktail.route');

app.use('/users', userRouter);
app.use('/cocktails', cocktailRouter);

// console.log("process.env.DATABASE_URL :", process.env.DATABASE_URL)
// ... other app.use middleware 
// app.use(express.static(path.join(__dirname, "client", "build")))

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => console.log(colors.green("Database Connected Successfully"))).catch(err => console.log(colors.red(err)));

mongoose.set('useCreateIndex', true);

app.use('/users', require('./routes/user.route'));
app.use('/cocktails', require('./routes/cocktail.route'));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
// // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }
app.listen(process.env.PORT || PORT, function () {
  console.log(colors.brightBlue("Server is running on Port: " + PORT));
});

// var express = require("express");
// var mongoose = require("mongoose");

// // Require all models
// var db = require("./models");
// console.log(db);

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost/grocerydb", { useNewUrlParser: true });

// var PORT = 3000;

// // Initialize Express
// var app = express();

// // Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Make public static folder
// app.use(express.static("public"));

// // Routes

// // Home route. Currently just to make sure app is running returns hello message.
// app.get("/", function(req, res) {
//   res.send("Hello from demo app!");
// });


// // Start the server
// app.listen(PORT, function() {
//   console.log("Listening on port " + PORT + ".");
// });