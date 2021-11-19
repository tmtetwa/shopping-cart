var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Product = require('../list/productList');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Teez Sneakers' });
  });

router.get('/user/signup', function(req, res, next){
  var messages = req.flash('error');
  res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages,
     hasErrors: messages.length > 0 });
});

router.post('/user/signup', function(req, res, next){
  res.redirect('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
  }));
});

router.get('/user/profile', function(req, res, next) {
  res.render('user/profile');
})

router.get('/user/signin', function(req, res, next) {
  res.render(('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
   );
});

router.post('/user/signin', function(req, res, next){
  res.redirect('/user/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
  }));
});

module.exports = router;
