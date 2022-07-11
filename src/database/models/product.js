const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    description : {
        type : String
    },
    price : {
        type : Number,
        required : true
    },
    images : [{
        type : String
    }],
    categorie: [{
        type : String
    }],
    type : {
        type : String
    },
    discount : {
        type :String
    },
    salesCount : {
        type : Number
    },
    rating:{
        type : Number
    },
    color :[{
        type : String
    }],
    size : [{
        type : Number
    }],
    stock : {
        type : Number
    }
    

  },{ timestamps: true });
  
  const productModel = mongoose.model("Product", productSchema);
  
  module.exports = productModel;