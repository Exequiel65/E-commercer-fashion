const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const contactSchema = new Schema({
    company : {
        type : Schema.Types.ObjectId,
        ref : 'Company'
    },
    address : [{ type : String}],
    addressLinkMaps : [{ type : String}],
    email : [{ type : String}],
    phone : [{ type : Number}],
    hours : [
        {
            type : Object
        }
    ]

  },{ timestamps: true });
  
  const contactModel = mongoose.model("Contact", contactSchema);
  
  module.exports = contactModel;