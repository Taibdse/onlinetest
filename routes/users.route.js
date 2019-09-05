const express = require('express');
const passport = require('passport');
const router = express.Router();
const UserController = require('../controllers/users.controller');

router.post(
    '/signin_google', 
    passport.authenticate('google', { session: false }), 
    UserController.sendtoken
);

router.post(
    '/signin_facebook', 
    passport.authenticate('facebook', { session: false }), 
    UserController.sendToken
);

router.post(
    '/signout', 
    passport.authenticate('jwt', { session: false }), 
    UserController.signOut
);


module.exports = router;
