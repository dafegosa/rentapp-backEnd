const router = require('express').Router()
const elementController = require('../controllers/element.controller')

router.route('/new').post(elementController.create)
router.route('/myElementsList').put(elementController.listOwnElements)
module.exports = router
