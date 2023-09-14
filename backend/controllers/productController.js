const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");


exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product
  });
});


exports.getAllProducts = catchAsyncErrors(async (req, res) => {

  const resultPerPage = 5;
  const productCount=await  Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
  .search()
  .filter().pagination(resultPerPage );
  const products = await apiFeature.query;
  res.status(200).json(
    {
      success: true,
      products,
      productCount
    })
})

//Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    product
  })
})



//update
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product Not Found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });
  res.status(200).json({
    success: true,
    product
  })
})


exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product Not Found", 404));
  }
  await product.deleteMany();
  res.status(200).json({
    success: true,
    message: "product Delete"
  })
})