// testConnection.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const MONGO_URI = process.env.MONGO_URI; // Your MongoDB connection string

const testConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Successfully connected to MongoDB');
        mongoose.connection.close(); // Close the connection after testing


        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'ShiftsDb', // Optional: Ensures the correct DB is used
        });
        let database = mongoose.connection.db; // Access the native MongoDB driver DB instance
        console.log('MongoDB connected');

        const users = await database.collection('users').find({}).toArray();
        console.log('Fetched users:', users);
        res.json(users); // Send the users as JSON response
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

testConnection();
