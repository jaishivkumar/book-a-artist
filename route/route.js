const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller')
const sailercontroller = require('../controller/sailercontroller')
const auth = require('../middleware/auth')

/*_____________________-----===> API FOR USER <====-----______________________________*/ 

router.post("/register", usercontroller.createUser)
router.post("/login",usercontroller.userLogin)
router.get('/user/:userId/profile',auth.userAuthentication, usercontroller.getUserDetails)
router.put('/user/:userId/profile',auth.userAuthentication, usercontroller.updateUserDetails)

/**______________________----==> PRODUCT API <===---____________________________________ */

router.post("/products", sailercontroller.createProduct)
router.get('/products',sailercontroller.getAllProducts)
router.get('/products/:productId',sailercontroller.getProductById)
router.put('/products/:productId',sailercontroller.updateProduct)
router.delete('/products/:productId',sailercontroller.deleteProduct)

module.exports = router;