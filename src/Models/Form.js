const mongoose = require ("mongoose")
const Form = new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  
  phoneno:{
    type:Number,
    required:true
  },

  email:{
    type:String,
    required:true
  },

  message:{
    type:String,
    required:true
  },

  interest:{
    type:String,
    required:true
  }



})

module.exports = mongoose.model("Form",Form)
