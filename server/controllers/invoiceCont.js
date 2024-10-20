let invoiceModel = require('../models/invoiceModel')
let asyncHandler = require('express-async-handler')

exports.createInvoice = asyncHandler(
    async (req,res,next) =>{
        let {rrr , fee, id, name, amount} = await req.body
        console.log(rrr, fee, id, name, amount)

        let invoice = await invoiceModel.findOne({rrr: rrr})

        try {
            if(!invoice){
                let newInvoice = new invoiceModel({
                    rrr: rrr,
                    fee: fee,
                    amount: amount,
                    payerId: id,
                    payerName: name
                })

                await newInvoice.save()
                res.status(200).json({message: 'success', action: 'invoice created', data: newInvoice})
            }  else if(invoice) {
                res.status(400).json({message: 'failure', action: 'invoice exists'})
            }        
        } catch (error) {
            res.status(400).json({message: 'error', error: error})
            console.log(error)
        }
    }
)
 