const expressAsyncMiddleware = require('express-async-handler')
const Admin = require('../models/Admin')
const Customer = require('../models/Customer')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const expressAsyncHandler = require('express-async-handler')
const pagination = require('../lib/pagination')


exports.signin = expressAsyncMiddleware(async (req, res) => {
    try {
        const { body } = req

        let checkUser = await Admin.findOne({ email: body.email })

        if (!checkUser) {
            return res.status(400).json({ success: false, message: 'Admin not found' })
        }

        let comparison = bcryptjs.compareSync(body.password, checkUser.password)

        if (!comparison) {
            return res.status(400).json({ success: false, message: 'Incorrect password' })
        }

        let token = jwt.sign({ userId: checkUser._id }, process.env.JWT_SECRET)

        checkUser.password = ''
        return res.json({
            success: true,
            message: 'Sign in successful',
            token: `Bearer ${token}`,
            isAuth: true,
            user: checkUser,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'Something went wrong' })
    }
})

exports.signup = expressAsyncHandler(async(req, res, next) => {
    try {
        
        let { email, name, password, confirmPassword } = req.body

        let findExist = await Admin.findOne({ email })

        if(findExist){
            return res.status(400).message('Email Id already exists')
        }

        let hashedPass = await bcryptjs.hash(password, 10)

        let admin = new Admin({name, email, password: hashedPass, })
        await admin.save()

        return res.json({ success: true, message: 'Signed up successfully' })

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Something went wrong' })
    }
})

exports.userinfo = expressAsyncHandler(async(req, res) => {
    try {
        req.user.password = ''
        return res.json({ user:req?.user })

    } catch (error) {
        return res.status(500).json({ success: false,user:'', message: 'Something went wrong' })
    }
})

exports.getAdminDetails = expressAsyncHandler(async (req, res) => {
    try {
        
        let { search, page } = req.body
        let paginate = pagination(req.body)
        let fields = ['name', 'id', 'email', 'phNum', 'country']
        
        let filter =search.length === 0? {}: { $or: [] }
        if(search){
            for(let field of fields){
                filter['$or'].push({ [field] : new RegExp(search, 'i')})
            }
        }

        console.log(filter);

        let count = await Customer.countDocuments(filter)
        let data = await Customer.find(filter).skip(paginate.skip).limit(paginate.limit)

        return res.json({ success: true, count, data })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Something went wrong' })
    }
})