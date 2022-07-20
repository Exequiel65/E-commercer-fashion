const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const companySchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    titleMision : { type : String},
    mission : { type : String },
    culture : [ String ],
    vision : {
        type : String
    },
    founders : [
        {
            type : Object
        }
    ]

  },{ timestamps: true });
  
  const companyModel = mongoose.model("Company", companySchema);
  
  module.exports = companyModel;