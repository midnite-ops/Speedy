let mongoose = require('mongoose')

const schema = mongoose.Schema

let newSchema = new schema({
    cardNumber: {
        type: String,
        unique: true
    },
    cardHolder: {
        type: Number,
        maxLength: 12,
        minLength: 12,
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