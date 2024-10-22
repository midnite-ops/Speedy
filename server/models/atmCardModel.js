let mongoose = require('mongoose')

const schema = mongoose.Schema

let newSchema = new schema({
    cardNumber: {
        type: Number,
        unique: true,
        maxLength: 12,
        minLength: 12,
    },
    cardHolder: {
        type: String,
        required: true
    },
    cardExpDate: {
        type: String,
    },
    cardCvv: {
        type: String,
        required: true,
        unique: true,
    },
})

let newModel = mongoose.model('cards', newSchema)

module.exports = newModel