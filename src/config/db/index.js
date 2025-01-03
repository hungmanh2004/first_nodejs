const mongoose = require('mongoose');

async function connect() {        // await phải nằm trong async function
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect mongodb successfully!!!');
    }
    catch(err) {
        console.log('Connect mongodb failure!!!');
    }
}

module.exports = { connect }