let invoiceModel = require('../models/invoiceModel')
let asyncHandler = require('express-async-handler')

exports.createInvoice = asyncHandler(
    async (req,res,next) =>{
        let {rrr , feeType, id, name, amount, qrcode, level, session} = req.body
        
        let rData = req.body
        console.log(rData, 'ln9')

        let invoice = await invoiceModel.findOne({rrr: rrr})

        try {
            if(!invoice){
                let newInvoice = new invoiceModel({
                    rrr,
                    fee: feeType,
                    amount,
                    payerId: id,
                    payerName: name,
                    qrcode,
                    level,
                    session,
                })

                await newInvoice.save()
                return res.status(200).json({message: 'success', action: 'invoice created', data: newInvoice})
            } 

            if(invoice){
                return res.status(409).json({message: 'failure', action: 'invoice exists'})
            }
            
                    
        } catch (error) {
            res.status(409).json({message: 'error', error: error.message})
            console.log(error)
        }
    }
)
 