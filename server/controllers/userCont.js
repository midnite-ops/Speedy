let mongoose = require('mongoose')
let userModel = require('../models/userModel')

const asyncHandler = require('express-async-handler')

exports.createUserPost =  asyncHandler(
    async(req,res,next) =>{

        let {rName, rEmail, rPass} = await req.body

        let email = rEmail.toLowerCase()
        let name = rName.toLowerCase()
        let pass = rPass.toLowerCase()

        console.log(email)
        console.log(name)
        console.log(pass)

        let user = await userModel.findOne({userEmail: email})

        try {
            if(!user){

                let newUser = new userModel({
                    userName: name,
                    userPass: pass,
                    userEmail: email
                })

                await newUser.save()

                res.status(200).json({message: 'success', action: "create user"})
                console.log('success')
                res.redirect('www.google.com')
            }
            if(user){
                res.status(400).json({message: 'failure', action: 'user exists', })
                console.log('failure')
            }

        } catch (error) {
            
        }
    }
)

//      Login User Controller
exports.loginUser = asyncHandler(
    async (req,res,next) =>{

        let {rEmail, rPass} = await req.body

        let email = rEmail.toLowerCase()
        let pass1 = rPass.toLowerCase()

        let user = await userModel.findOne({userEmail: email})
        
        try {
            if(user){
                let pass = user.userPass
                if(pass == pass1){
                    res.status(200).json({message: "success", id: user._id, action: 'user login'})
                }
            }

            if(!user){
                res.status(400).json({message: 'failure', action: 'user does not exist'})
            }
        } catch (error) {
            res.status(400).json({error: error})
        }
    }
)