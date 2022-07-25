let express = require('express')
let router = express.Router()
let contactController = require('../controllers/contactController')


router.get('/', contactController.getContact)
router.post('/created', contactController.createContact)





module.exports = router