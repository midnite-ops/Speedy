let mongoose = require('mongoose')

let schema = mongoose.Schema

let newSchema = schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userPass: {
        type: String,
        required: true,
    }
})

let userModel = mongoose.model('users', newSchema)

module.exports = userModel