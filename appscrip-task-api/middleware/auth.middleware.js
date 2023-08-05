const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

const adminAuthMiddleware = async (req, res, next) => {
  try {
    let token = req.headers['authorization']
    if (token) token = token.split(' ')[1]

    if (
      !token &&
      !req.path.includes('signin') &&
      !req.path.includes('signup') &&
      !req.path.includes('forgotpassword') &&
      !req.path.includes('forgotreset')
    ) {
      return res.status(403).json({
        success: false,
        auth: false,
        message: 'Cannot Authorize',
      })
    }
    if (!token) {
      token = 'noToken'
    }

    let verify = jwt.verify(token, process.env.JWT_SECRET)
    let decodedToken = jwt.decode(token)

    let admin = await Admin.findById(decodedToken.userId)

    if (!admin) {
      return res.status(403).json({
        success: false,
        auth: false,
        message: 'Invalid Token',
      })
    }

    if (
      (token && admin && req.path.includes('signin')) ||
      req.path.includes('signup') ||
      req.path.includes('forgotpassword') ||
      req.path.includes('forgotreset')
    ) {
      return res.status(400).json({ success: false, message: "You're already signed in" })
    }

    req.user = admin
    next()
  } catch (error) {
    if (
      req.path.includes('signin') ||
      req.path.includes('signup') ||
      req.path.includes('forgotpassword') ||
      req.path.includes('forgotreset')
    ) {
      return next()
    }
    return res.status(403).json({ auth: false, message: 'Invalid token' })
  }
}

module.exports = adminAuthMiddleware