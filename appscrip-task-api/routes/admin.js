const express = require('express')
const adminValids = require('../validations/admin.validation')
const adminAuthMiddleware = require('../middleware/auth.middleware')
const adminCtrl = require('../controllers/admin.controller')

const router = express.Router()

router.route('/userinfo').get(adminAuthMiddleware, adminCtrl.userinfo )
router.route('/signup').post(adminAuthMiddleware, adminValids.signup, adminCtrl.signup)
router.route('/signin').post(adminAuthMiddleware, adminValids.signin, adminCtrl.signin)
router.route('/customer-detail').post(adminAuthMiddleware, adminCtrl.getAdminDetails)

module.exports = router