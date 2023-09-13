const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
  name:{
    type:String,
    required:[true,"please Enter Product Name"],
    trim:true
  },
  description:{
    type:String,
    required:[true,"please Enter product Name"]
  },
  price:{
     type:Number,
     required:[true,"please Enter Product Price"],
     maxLength:[8,"Price cananot exeed 8 character"]
  },
  rating:{
    type:Number,
    default:0
  },
  images:
 [ {
    public_id:{
      type:String,
      required:true
    },
    url:{
      type:String,
      required:true
    }
  }],
    category:{
      type:String,
      required:[true,"Please Enter Product Cateoy"],
    },
    Stock:{
      type:Number,
      required:[true,"please Enter Stock"],
      maxLength:[4,"Stock cannor exceed 4 character"],
      default:1
    } ,
    numofReviews:{
      type:Number,
      default:0
    },
    reviews:[
      {
        name:{
          type:String,
          required:true
        },
        rating:{
          type:Number,
          required:true
        },
        comment:{
          type:String,
          required:true
        }
      }
    ],
    createAt:{
      type:Date,
      default:Date.now
    }
})

module.exports =mongoose.model("Product",productSchema)