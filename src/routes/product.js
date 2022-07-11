let express = require('express')
let router = express.Router()
let productController = require('../controllers/productController')
let validator = require('../helpers/validator')

router.get('/all', productController.all)
router.get('/featured', productController.featured)
router.post('/created', productController.created)




module.exports = router