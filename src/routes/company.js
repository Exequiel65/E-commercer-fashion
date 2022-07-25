let express = require('express')
let router = express.Router()
let companyController = require('../controllers/companyController')


router.get('/', companyController.getCompany)
router.post('/created', companyController.created)





module.exports = router