const isEmpty = require('../lib/isEmpty')
const validatePassword = require('../lib/validatePassword')


const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
// EMAIL REGEX RFC 2822 FORMAT



exports.signup = (req, res, next) => {
    try {
        
        let errors = {}
        let { body } = req

        if(isEmpty(body.email)) {
            errors.email = 'Email cannot be empty'
        } else if (!emailRegex.test(body.email)){
            errors.email = 'Invalid Email'
        }

        if(isEmpty(body.name)){
            errors.name = 'Name cannot be empty'
        } else if(body.name.length < 6 || body.name.length > 20) {
            errors.name = 'Name must contain 6 - 20 characters'
        }

        if(isEmpty(body.password)){
            errors.password = 'Password cannot be empty'
        } else {
            let validate = validatePassword(body.password)
            if(validate){
                errors.password = validate
            }
        }

        if(isEmpty(body.confirmPassword)){
            errors.confirmPassword = 'Confirm Password cannot be empty'
        } else if (body.confirmPassword !== body.password){
            errors.confirmPassword = 'Passwords didn\'t match'
            errors.password = 'Passwords didn\'t match'
        }

        if(!isEmpty(errors)){
            return res.status(400).json({ success: false, errors })
        }

        return next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Something went wrong' })
    }
}

exports.signin = (req, res, next) => {
    try {
        
        let errors = {}
        let {body} = req

        if(isEmpty(body.email)) {
            errors.email = 'Email cannot be empty'
        } else if (!emailRegex.test(body.email)){
            errors.email = 'Invalid Email'
        }

        if(isEmpty(body.password)){
            errors.password = 'Password cannot be empty'
        } else {
            let validate = validatePassword(body.password)
            if(validate){
                errors.password = 'Invalid Password'
            }
        }

        if(!isEmpty(errors)){
            return res.status(400).json({ success: false, errors })
        }

        return next()

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: 'Something went wrong' })
    }
}