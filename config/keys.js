require('dotenv').config();

module.exports = {
    MONGOURI: process.env.MONGOURI,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET, 
    JWT_SECRET_KEY: process.env.FACEBOOK_APP_SECRET,
}