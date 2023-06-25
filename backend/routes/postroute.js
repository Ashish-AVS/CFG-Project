const express = require("express");
const User = require("../models/child");
const router = express.Router();
const {
  getPosts,
  createPost,
} = require("../controllers/postController");

//router.post("/", signUp);
router.get('/info', async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users from the database

    res.json(users); // Send the retrieved users as a JSON response
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
const bcrypt = require('bcrypt');

router.post('/users', async (req, res) => {
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
    lastResponseDate,
    lastReponse,
  } = req.body;

  try {
    // Check if the user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new User({
      fname,
      lname,
      role,
      age,
      gender,
      email,
      password: hashedPassword,
      contactNumber,
      finNeed,
      health,
      dob,
      admitDate,
      status,
      parentsContact,
      familyStatus,
      lastResponseDate,
      lastReponse,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
// router.post("/login", login);
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user with the provided email
    const user = await User.findOne({ email });

    // If the user is not found
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the password does not match
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // If the email and password are correct, return a success message or the user object
    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;
