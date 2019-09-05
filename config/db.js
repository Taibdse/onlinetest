const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGOURI, { useCreateIndex: true, useNewUrlParser: true })
    .then(res => console.log('DB Server connected'))
    .catch(err => {
        console.log(err);
        process.exit(1);
    })
}

module.exports = { connectDB };

