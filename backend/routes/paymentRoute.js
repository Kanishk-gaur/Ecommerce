const express = require("express");
const router = express.Router();
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const { isAuthenticatedUser } = require("../middleware/auth");


//router.route("/payment/process").post(isAuthenticatedUser, processPayment);
// router.post('/payment/process', isAuthenticatedUser, processPayment)
router.post('/payment/process', (req,res)=>{
  isAuthenticatedUser, processPayment

})

// router.post("/payment/process", (req, res) => {
//   res.send(isAuthenticatedUser, processPayment);
// })

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);
// router.get('/stripeapikey', (req,res)=>{
//   isAuthenticatedUser, sendStripeApiKey
  
//   console.log(isAuthenticatedUser);
//   console.log("fdsf");
// })
router.get("/payment/process", (req, res) => {
  res.send(isAuthenticatedUser, sendStripeApiKey);
})


module.exports = router