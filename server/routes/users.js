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
        return res.status(422).send({errors:[{title: 'User Error', detail: 'please fill username!'}]});
    }

    if (!email) {
        return res.status(422).send({errors:[{title: 'User Error', detail: 'please fill email!'}]});
    }

    if (!password) {
        return res.status(422).send({errors:[{title: 'User Error', detail: 'please fill password!'}]});
    }

    if (password !== confirmPassword) {
        return res.status(422).send({errors:[{title: 'User Error', detail: 'please check password!'}]});
    }

    User.findOne({email}, function(err, foundUser){
      if(err) {
        return res.status(422).send({errors:[{title: 'User Error', detail: 'Something went wrong'}]});
      }  
      if (foundUser) {
        return res.status(422).send({errors:[{title: 'User Error', detail: 'User already exists!'}]});
      }

      const user = new User({username, email, password})
      user.save(function(err) {
          if(err) {
            return res.status(422).send({errors:[{title: 'User Error', detail: 'Something went wrong'}]});
          }
          return res.json({"registerd": true})
      })
    })
});

module.exports = router;