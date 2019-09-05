const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/oauth/google', passport.authenticate('googleStrategy', { session: false }))