const Child = require("../models/child");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//

//SignUp
const signUp = async (req, res) => {
  const {
    fname,
    lname,
    role,
    age,
    gender,
    email,
    password, 
    contactNumber,
    finNeed,
    health,
    dob,
    admitDate,
    status,
    parentsContact,
    familyStatus,
  } = req.body;

  try {
    const user = await Child.create({
      fname,
      lname,
      role,
      age,
      gender,
      email,
      password,
      contactNumber,
      finNeed,
      health,
      dob,
      admitDate,
      status,
      parentsContact,
      familyStatus,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Child.find({ email, password });
    if (user.length !== 0) {
      const access_token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET);
      res.status(200).json({
        user: user,
        access_token: access_token,
      });
    } else {
      res.status(400).json({ error: "Child Does Not Exist" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get all Children
const getChildren = async (req, res) => {
  try {
    const users = await Child.find({});
    res.status(200).json(users);
  } catch {
    (err) => res.status(404).json({ error: err.message });
  }
};

//Create new Child account

module.exports = {
  signUp,
  getChildren,
  login,
};
