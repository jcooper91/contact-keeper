const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({msg: 'Welcome to the Contact Keeper API'}))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

// production look for environment vatiable called PORT or on dev use port 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))