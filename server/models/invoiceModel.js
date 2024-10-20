let mongoose = require('mongoose')

let schema = mongoose.Schema

let newSchema = schema({
    rrr: {
        type: String,
        required: true,
        unique: true
    },
    fee: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    payerName: {
        type: String,
        required: true
    },
    payerId: {
        type: 'string'
    },
    invoiceQrcode: {
        type: 'string'
    }
})

let invoiceModel = mongoose.model('invoice', newSchema)

module.exports = invoiceModel