const express = require("express");
const User = require("../models/child");
const router = express.Router();
const {
  signUp,
  getChildren,
} = require("../controllers/childController");

const {smsHandler} = require('../controllers/smsController')
const user = require("../models/child");

router.post("/post/create", signUp);

//To get all Details of the Children
router.get("/post", getChildren);

router.get("/sms", smsHandler);
module.exports = router;
