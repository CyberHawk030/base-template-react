const validatePassword = (p) => {
    
    if (p.length < 8) {
        return "Your password must be at least 8 characters" 
    } else if (p.search(/[a-z]/i) < 0) {
        return "Your password must contain at least one lowercase letter"
    } else if (p.search(/[A-Z]/i) < 0) {
        return "Your password must contain at least one uppercase letter"
    } else if (p.search(/[0-9]/) < 0) {
        return "Your password must contain at least one digit"
    } else{
        return false
    }
}

module.exports = validatePassword