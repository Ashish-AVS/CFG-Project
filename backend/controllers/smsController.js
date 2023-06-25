const Child = require("../models/child");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const {
    getChildren
  } = require("./childController");


//get all Children
const smsHandler = async (req, res) => {
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure


const accountSid = 'ACc99f093b25e1b70a831f4118c47472c8';
const authToken = '49bc86002126c3cdbe0244807514d002';
const client = require('twilio')(accountSid, authToken);

const childrenList = getChildren()



    // contactNumber, name
    client.messages
  .create({
     body: `Hi, Ashish. This is Radha from Rainbow house, we hope that you are doing well, we are concerned about your health, kindly confirm by clicking the form link http://localhost:3000/form`,
     from: '+13613385840',
     to: '+917997707752'
   })
  .then(message => {
    console.log(message.sid);
    res.json({'msg': "SMS sent successfully"})
  }).catch(err => res.json(err));

};

//Create new Child account

module.exports = {
    smsHandler
};
