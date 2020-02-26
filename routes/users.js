const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
// able to use check validator to check certain fiels are sent to the request
const { check, validationResult } = require('express-validator')

// @route   @POST api/users
// @desc    Register a user
// @access  Public
router.post('/', [
    // Set validation (Only need to do this for routes that accept data and need validation)
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min:6})
], async (req, res) => {
    // return if validation erors
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    
    // deconstruct the user elements
    const { name, email, password } = req.body 

    try {
        // check if user exists in the database
        let user = await User.findOne({ email })

        // return message to state user already exits
        if(user) {
            return res.status(400).json({ msg: 'User already exists' })
        }
        
        // create user from the user model
        user = new User({
            name,
            email,
            password
        })

        //general salt
        const salt = await bcrypt.genSalt(10)

        // set password with hash, salt 
        user.password = await bcrypt.hash(password, salt)

        // save to db
        await user.save()
        
        // set payload - payload is the object you want to send in the token
        // with this ID, we can get specific data like all the contacts they have stored
        const payload = {
            user: {
                id: user.id
            }
        }

        // generate a token with sign and assign it
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err
            res.json({ token })
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router