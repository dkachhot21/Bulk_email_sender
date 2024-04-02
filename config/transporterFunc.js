const { OAuth2Client, access_token } = require('../OAuth/OAuth2Client');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

// Create Nodemailer transporter using OAuth2
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.YOUR_CLIENT_ID,
        clientSecret: process.env.YOUR_CLIENT_SECRET,
        refreshToken: process.env.YOUR_REFRESH_TOKEN,
        accessToken: access_token
    }
});

module.exports = transporter;