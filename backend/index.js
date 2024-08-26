const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
const usersRoutes = require('./routes/usersRoutes');

const app = express();

// Use the port provided by Heroku or default to 3000
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(express.json());

let database;

// Define Routes
app.use('/api/users', usersRoutes);

// Simple Routes for Testing
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// const mongoUri = process.env.MONGO_URI || `mongodb://localhost:27017/ShiftsDb`;
const mongoUri = process.env.MONGO_URI || `mongodb://localhost:27017/ShiftsDb`;
// const mongoUri = process.env.MONGO_URI || 'mongodb+srv://itayrot2584:itayrot2584@users.ra7dxz2.mongodb.net/';

// Connect to MongoDB and Start Server
const connectDBAndStartServer = async () => {
    try {
        await mongoose.connect(mongoUri, {
            dbName: 'ShiftsDb', // Optional: Ensures the correct DB is used
        });
        database = mongoose.connection.db; // Access the native MongoDB driver DB instance
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit the process if the database connection fails
    }

};

// Start the server
app.listen(PORT, () => {
    console.log(`Backend listening at http://localhost:${PORT}`);
});

// Initialize the database connection and start the server
connectDBAndStartServer();
