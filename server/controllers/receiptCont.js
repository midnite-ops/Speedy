let receiptModel = require('../models/receiptModel')
let asyncHandler = require('express-async-handler')


exports.createReceipt = asyncHandler(
    async(req, res, next) => {

        let {rrr, payerName, payerId, fee, amount, qrcode} = await req.body

        let receipt = await receiptModel.findOne({rrr: rrr})

        try {
            if(!receipt){ 
                let newReciept = new receiptModel({
                    rrr,
                    payerName,
                    payerId,
                    fee,
                    amount,
                    receiptQrcode: qrcode
                })

                await newReciept.save()

               return res.status(200).json({message: 'success', action: 'created reciept', data: newReciept})
            }


            if(receipt && qrcode){
                await receiptModel.updateOne(
                    {rrr: rrr},
                    {$set: {receiptQrcode: qrcode}}
                )
               return await res.status(200).json({message: 'success', action: 'updated Qrcode', data: receipt})
            } 
            
            else {
                  return res.status(409).json({message: 'failure', action: 'receipt exists', data: receipt})

            }

  


        } catch (error) {
           return res.status(400).json({error: error.message,  message: 'failure', action: 'failed to create receipt'})
        }
    }
) 


exports.getreceipt = asyncHandler(
    async(req, res) =>{

        let qrcode = req.params.qrcode
        console.log(qrcode)

        let receipt = await receiptModel.findOne({receiptQrcode: qrcode})
        try {
            if(receipt){
                return res.status(200).json({message: 'success', action: 'receipt found', data: receipt})
            }

            if(!receipt){
                return res.status(400).json({message: 'failure', action: 'receipt not found'})
            }

        } catch (error) {
            return res.status(400).json({message: 'failure', action: 'error', error: error.message})
        }
    }
)