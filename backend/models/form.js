const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const forM = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    fname:{
      type:String
    },
    lname:{
      type:String
    },
    phno:{
      type:Number
    },
    job:{
      type:String
    },
    q1:{
      type:String
    },
    q2:{
      type:String
    },
    q3:{
      type:String
    },
    q4:{
      type:String
    },
    q5:{
      type:String
    },
    q6:{
      type:String
    },
    q7:{
      type:String
    },
    q8:{
      type:String
    },
    msg:{
      type:String
    }
    },
  
  { timestamps: true }
);

module.exports = mongoose.model("form", forM);
