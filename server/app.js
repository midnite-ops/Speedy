const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//      app
const app = express()

//controllers
let userCont = require('./controllers/userCont')
let invoideCont = require('./controllers/invoiceCont')
let receiptCont = require('./controllers/receiptCont')
let atmCont = require('./controllers/atmCont')

//      app.use
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['PUT', 'GET', 'POST']
}))

//      MongoDb server connection
let mongoConnect = mongoose.connect('mongodb+srv://dansdana1999:07061071398@cluster0.rcbk7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
                  .then(resp => console.log('db connected'))
                  .catch(error => console.log(error))

//      get request
app.get('/se', (req, res) =>{
    res.send('hello world here we come')
})

//      Post Request
app.post('/createuser', userCont.createUserPost)
app.post('/login/', userCont.loginUser)
app.post('/createinvoice', invoideCont.createInvoice)

app.post('/createatm', atmCont.createCard)
app.post('/createreceipt', receiptCont.createReceipt)

app.post('/getatm', atmCont.getAtm)


app.listen(3033, () =>{
    console.log('Server started on port 3033')
})