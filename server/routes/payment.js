const express = require("express")
const router = express.Router()
const cors = require("cors")
const { initializePayment, verifyPayment } = require("../controllers/paymentController")

router.post('/', cors(), initializePayment)

// verfiy payment endpoint
router.get('/verify/:id', cors(), verifyPayment)


module.exports = router
