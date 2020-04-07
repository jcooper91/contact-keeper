const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect Database
connectDB()

// Init Middlewate
app.use(express.json({ extended: true }))

// app.get('/', (req, res) => res.json({msg: 'Welcome to the Contact Keeper API'}))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts')) 

// Serve static assets in production 
if(process.env.NODE_ENV === 'production') {
    //set static folder 
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// production look for environment vatiable called PORT or on dev use port 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))