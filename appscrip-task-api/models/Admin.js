const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        default: ''
    },
    activeSessions: {
        type: Array,
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model('admin', AdminSchema, 'admins')