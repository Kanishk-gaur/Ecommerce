const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const dotenv=require("dotenv")


const errorMiddleware = require("./middleware/error");

// Config
dotenv.config({path:"backend/config/config.env"});

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const { isAuthenticateUser } = require("./middleware/auth");
const catchAsyncErrors = require("./middleware/catchAsyncErrors");
// const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
// app.use("/api/v1", payment);

//For Payment 
app.post("/process/payment",isAuthenticateUser,catchAsyncErrors(async(req,res)=>{
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });
  res.status(200).json({
    success: true,
    client_secret: myPayment.client_secret
  });
 }))

//  app.get("/stripeapikey",isAuthenticateUser,catchAsyncErrors(async(req,res)=>{
//   res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
//  }))



//middleeware for error
app.use(errorMiddleware)

module.exports = app