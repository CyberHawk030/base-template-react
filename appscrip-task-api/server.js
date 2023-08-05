require('dotenv').config()
console.log(`\u001B[31m${process.env.RUNTIME_MODE} Server`)

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const adminroute = require('./routes/admin')

const app = express()

app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        origin: '*',
    }),
)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use(morgan('dev'))

app.use('/api/v1', adminroute)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('\u001B[35mDatabase connection successful')
    app.listen(process.env.PORT, (err) => {
        if (err) {
            console.log(err)
            process.exit()
        }
        console.log(`\u001B[34mServer runs on port ${process.env.PORT}`)
    })
}).catch(err => {
    console.log(err);
    process.exit()
})