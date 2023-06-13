const express = require('express');
const router = express.Router();
const productControllers=require('../controllers/product');

router.get('/view-list-products',productControllers.getAllProducts);
router.get('/getProduct/:productId',productControllers.getProductById);
router.get('/getProductByTitleAndPrice',productControllers.getProductByTitleAndPrice);
router.post('/createProduct',productControllers.createProduct)
module.exports=router;