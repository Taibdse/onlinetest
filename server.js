const express = require('express');
const cors = require('cors');
const passport = require('passport');
const usersRouter = require('./routes/users.route');
require('dotenv').config();

//connect DB Server
const { connectDB } = require('./config/db');
connectDB();

//Initialize server
const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

require('./config/passport');

//routes
app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Web server is running on PORT ${PORT}`));