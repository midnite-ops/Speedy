let atmCardModel = require('../models/atmCardModel')
let asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')

exports.createCard = asyncHandler(
    async(req, res, next) => {

        let {cardNumber, cardHolder, cardExpiry, cardCvv} = req.body
        console.log(cardNumber)

        let card = await userModel.findOne({cardNumber: cardNumber})

        try {
            if(!card){
                let newCard = new atmCardModel({
                    cardNumber: cardNumber,
                    cardHolder: cardHolder.toLowerCase(),
                    cardExpDate: cardExpiry,
                    cardCvv: cardCvv
                })

                await newCard.save()

                res.status(200).json({message: 'success', action: 'created card', data: newCard})
            }
            
            if(card){
                return res.status(200).json({message: 'failure', action: 'card exist'})
            }

        } catch (error) {
            res.status(400).json({error: error, message: 'failure', action: 'failed to create card'})
        }
    }
) 


//      Get
exports.getAtm = asyncHandler(
    async (req,res) =>{
        let {cardHolder, cardNum ,cardCvv} = req.body

        let card = await atmCardModel.findOne({cardNumber: cardNum})

        try {
            if(card){
                return res.status(200).json({message: 'success', action: 'card exist'})
            }

        } catch (error) {
            
            return res.status(400).json({error: error.message, message: 'failure'})
        }
    }
)