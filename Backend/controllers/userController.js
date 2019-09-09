const express = require('express');
const router  = express.Router();
const User    = require('../models/user');
const bcrypt  = require('bcryptjs');

router.post('/login', async (req, res) => {
console.log("user controller line 7",req.body)
  // LOGIN USER
  try {
    const foundUser = await User.findOne({username: req.body.username});
    console.log(foundUser, ' foundUser');

//Password validation
  if(foundUser){
    // bcrypt compare returns true // or false
    if(bcrypt.compareSync(req.body.password, foundUser.password)){
      console.log("PASSWORD MATCHED") 
      // Set Session
      req.session.userId = foundUser._id;
      req.session.username = foundUser.username;
      req.session.logged = true;
      
      res.json({
        status: {
          code:201
        },
        data:foundUser
      })
    }else {
      req.session.message = 'Username or Password incorrect, try again';
      res.redirect('/');
    }
  }
  } catch(err){
    res.send(err);
  }
});

router.post('/register', async (req, res) => {
if(req.body.password===req.body.confpassword){
  // Encrypt password
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  console.log(hashedPassword)
  req.body.password = hashedPassword;

  // Encrypt confpassword
  const confpassword = req.body.confpassword;
  const hashedConfPassword = bcrypt.hashSync(confpassword, bcrypt.genSaltSync(10));
  console.log(hashedConfPassword)
  req.body.confpassword = hashedConfPassword;

  // CREATE USER
  try {
      const createdUser = await User.create(req.body);
      console.log(createdUser, ' created user');
      // Session
      req.session.userId = createdUser._id;
      req.session.username = createdUser.username;
      req.session.logged = true;
      
      res.json({
        status: {
          code:201
        },
        data:createdUser
      })

  } catch (err){
    res.send(err)
  }}else{
    req.session.message = 'Username is already taken or Passwords do not match, try again';
    res.redirect('/');
  }
});

//Log user out (End Session)
router.get('/logout', (req, res) => {
console.log('SESSION ENDED')
  req.session.destroy((err) => {
    if(err){
      res.send(err);
    } else {
      res.redirect('http://localhost:3000/');
    }
  })
})

module.exports = router;