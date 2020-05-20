var userRouter = require('express').Router();
let User = require('./../model/user.model');

// read
userRouter.route('/').get(function (req, res) {
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
userRouter.route('/create').post(function (req, res) {
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
userRouter.route('/update/:id').put(function (req, res) {
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
userRouter.route('/delete/:id').delete(function (req, res) {
  User.findOneAndRemove(req.params.id, function (err, user) {
    if (!user)
      res.status(404).send('user with this id not found');
    else
      res.status(200).send('user with this id deleted')
  })
});


module.exports = userRouter;