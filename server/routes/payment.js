const express = require("express")
const router = express.Router()
const cors = require("cors")
const { initializePayment, verifyPayment } = require("../controllers/paymentController")



module.exports = router
