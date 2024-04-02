const express = require('express');
const dotenv = require('dotenv').config();
const sendRoute = require('./routes/sendRoute.js')
const save=require('./routes/dbRoute.js');
const connectDB = require('./config/connectDB.js');


const app = express();
app.use(express.json());

connectDB();

// Endpoint to trigger sending emails
app.use('/sendEmails',sendRoute);
app.use('/db',save)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
