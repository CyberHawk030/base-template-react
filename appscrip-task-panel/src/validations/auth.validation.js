import isEmpty from '../lib/isEmpty'

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const signinValidation = (data) => {
    let errors = {}

    if(isEmpty(data?.email)){
        errors.email = 'Email cannot be empty'
    } else if (!emailRegex.test(data?.email)){
        errors.email = 'Invalid email format'
    }

    if(isEmpty(data?.password)){
        errors.password = 'Password cannot be empty'
    } else if (data.password.includes(' ')){
        errors.password = 'Password cannot contain empty space'
    }
    
    return errors
}

export const signupValidation = (data) => {
    let errors = {}

    if(isEmpty(data?.email)){
        errors.email = 'Email cannot be empty'
    } else if (!emailRegex.test(data?.email)){
        errors.email = 'Invalid email format'
    }

    if(isEmpty(data.name)){
        errors.name = 'Name cannot be empty'
    } else if (data.name.length < 6 || data.name.length > 20) {
        errors.name = 'Name can only contain 6 - 20 characters'
    }

    if(isEmpty(data?.password)){
        errors.password = 'Password cannot be empty'
    } else if (data.password.includes(' ')){
        errors.password = 'Password cannot contain empty space'
    }

    if(isEmpty(data?.confirmPassword)){
        errors.confirmPassword = 'Confirm Password cannot be empty'
    } else if (data.confirmPassword !== data.password) {
        errors.password = 'Passwords didn\'t match'
        errors.confirmPassword = 'Passwords didn\'t match'
    }
    
    return errors
}