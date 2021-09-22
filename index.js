require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productsRouter = require('./routes/products')
const PORT = process.env.PORT || 3000

// console.log(process.env.CONNECTION_STRING) 
//Mogoose connection
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('connected to mongodb') })

//parse body from request
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

//VIEW ENGINE
app.set('views', './views')
app.set('view engine', 'pug')



app.use('/products', productsRouter)
app.listen(PORT, () => { console.log('server is up and running at port 3000') })

// H8XptEhSANkmb7FT
// mongodb+srv://first-mongo:H8XptEhSANkmb7FT@cluster0.6thy3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority