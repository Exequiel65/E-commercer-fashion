let express = require('express')
let router = express.Router()
let authController = require('../controllers/authController')
let loginValidator = require('../validator/loginValidator')
let registerValidator = require('../validator/registerValidator')
let validator = require('../helpers/validator')

router.post('/register', registerValidator, validator.validateFields, authController.register)
router.post('/login', loginValidator, validator.validateFields, authController.login)




module.exports = router