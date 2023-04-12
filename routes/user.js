const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');
const { authentication, authorization } = require('../middlewares/auth');
const { uploader } = require('../middlewares/multer')

router.get('/list', authentication, authorization, userController.getAllUser)
router.post('/login', userController.login)
router.post('/register', userController.register)
router.get('/find/:id', authentication, authorization, userController.findById)

module.exports = router;