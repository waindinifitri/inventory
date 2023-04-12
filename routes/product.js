const express = require("express");
const router = express.Router();

const {productController} = require('../controllers/product');
const { authentication, authorization } = require('../middlewares/auth');
const { uploader } = require('../middlewares/multer')

router.post('/add',authentication, authorization, uploader.single('picture'), productController.addProduct)
router.get('/list', authentication, productController.productList)
router.get('/find/:id',authentication, productController.findById)
router.delete('/delete/:id', authentication, authorization, productController.deleteProduct)


module.exports = router;