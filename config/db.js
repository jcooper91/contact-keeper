const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {

    try {
        await mongoose.connect(db, {
            // these are just to remove warnings from the console 
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('MongoDB Connected yes')
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB