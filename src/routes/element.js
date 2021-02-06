const router = require('express').Router()
const elementController = require('../controllers/element.controller')

router.route('/new').post(elementController.create)
router.route('/myElementsList').put(elementController.listOwnElements)
router.route('/all').get(elementController.listElements)
module.exports = router
