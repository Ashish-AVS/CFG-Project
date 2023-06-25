const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const childSchema = new Schema(
  {
    fname: {
      type: String,
      // required: true,
    },
    lname: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
    },
    finNeed: {
      type: String,
    },
    health: {
      type: String,
    },
    dob: {
      type: String,
    },
    admitDate: {
      type: String,
      // required: true,
    },
    status: {
      type: String,
    },
    parentsContact: {
      type: String,
    },
    familyStatus: {
      type: String,
    },
    lastResponseDate:{
      type: Number,
    },
    lastReponse:{
      type: Boolean,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Child", childSchema);
