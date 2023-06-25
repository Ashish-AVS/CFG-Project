const express = require('express');
const app = express();
const Form = require("../models/form");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.get('/forma', async (req, res) => {
  try {
    const test = await User.find(); // Retrieve all users from the database

    res.json(test); // Send the retrieved users as a JSON response
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/form', async (req, res) => {
  try {
    const formData = req.body;

    // Create a new form object based on the schema
    const newForm = new Form(formData);

    // Save the form data to the database
    const savedForm = await newForm.save();

    res.status(200).json({ message: 'Form data saved successfully.', data: savedForm });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while saving the form data.' });
  }
});

module.exports = app;