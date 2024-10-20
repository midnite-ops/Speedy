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
    receiptQrcode: {
        type: String
    }
})

let invoiceModel = mongoose.model('receipt', newSchema)

module.exports = invoiceModel