// backend/src/controllers/userController.js
const User = require('../models/Users');

// Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetches all users from the database
    console.log('users list:', users)
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Fetch a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'User not found' });
    res.status(500).send('Server Error');
  }
};

module.exports = { getAllUsers, getUserById };
