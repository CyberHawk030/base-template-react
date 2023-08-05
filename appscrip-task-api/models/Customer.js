const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phNum: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('customerInfo',CustomerSchema, 'customerInfo')