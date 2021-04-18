const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.post('/login', function(req,res){
    // Product.find({}, function(err, foundProducts){
    //   return res.json(foundProducts);
    // })
});

router.post('/register', function(req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (!username) {
        // Invalid error
    }

    if (!email) {
        // Invalid error
    }

    if (!password) {
        // Invalid error
    }

    if (password !== confirmPassword) {
        // Invalid error
    }

    User.findOne({email}, function(err, foundUser){
      if (foundUser) {
        // Invalid error
      }

      const user = new User({username, email, password})
      user.save(function(err) {
          if(err) {
              // Error message
          }
          return res.json({"registerd": true})
      })
    })
});

module.exports = router;