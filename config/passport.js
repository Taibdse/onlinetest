const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');

const User = require('../models/user');

const { ExtractJwt, Strategy: JwtStrategy } = passportJWT;

require('dotenv').config();

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY
}, async (jwt_payload, done) => {
    try {
        //Find the user specified in token
        const user = await User.findById(jwt_payload.user.id);
        console.log(user);
        //If the user doesn't exist, handle it
        if(!user){
            return done(null, false);
        }
        //Otherwise, return the user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}))

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       console.log(username);
//       console.log(password);
//     }
// ));

passport.use('google', new GooglePlusTokenStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
    const user = await User.findOne({ 'google.id': profile.id });
    if(user){
      return done(null, user);
    } 

    const newUser = new User({ google: { id: profile.id, email: profile.emails[0].value } });
    await newUser.save();
    return done(null, newUser);
}))


passport.use('facebook', new FacebookTokenStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET
}, async (accessToken, refreshToken, profile, done) => {

  const user = await User.findOne({ 'facebook.id': profile.id });
  if(user){
    return done(null, user);
  }

  const newUser = new User({ 
    facebook: { 
      id: profile.id, 
      email: profile.emails[0].value, 
      displayName: profile.displayName 
    },
    method: 'facebook'
  })
  await newUser.save();
  return done(null, newUser);
}));