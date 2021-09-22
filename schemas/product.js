const mongoose = require('mongoose')

// Defining product Schema
const productSchema = new mongoose.Schema({    
    name: { type: String, required: true },
    price: { type: Number, required: false },
    description: { type: String, required: true },
    category: { type: String, required: false },
    store: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: false },
    discountPercentage: { type: Number, required: false } 
})

// Defining the product model from schema
const Product = mongoose.model('Product', productSchema)

module.exports = Product