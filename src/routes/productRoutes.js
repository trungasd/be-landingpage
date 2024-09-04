const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add a new product
router.post('/add', productController.addProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Update a product
router.put('/:id', productController.updateProduct);

// Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
