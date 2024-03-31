const express = require('express');
const dotenv = require('dotenv').config();
const sendRoute = require('./routes/sendRoute.js')
const app = express();


// Endpoint to trigger sending emails
app.use('/sendEmails',sendRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
