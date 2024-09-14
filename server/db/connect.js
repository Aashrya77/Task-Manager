const mongoose = require('mongoose')

const connectDb= (url) => {
    return mongoose.connect(url, console.log(
        'connected to the db...'
    ))
}

module.exports = connectDb  