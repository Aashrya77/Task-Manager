const express = require('express')
const router = express.Router()

const {getProducts, 
    getSingleProduct,
    createProduct, 
    updateProduct,
    deleteProduct} = require('../controllers/control')

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').get(getSingleProduct).patch(updateProduct).delete(deleteProduct)

module.exports = router