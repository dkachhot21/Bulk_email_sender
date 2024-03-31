const { OAuth2Client,access_token } = require('../OAuth/OAuth2Client');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

// Create Nodemailer transporter using OAuth2
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.ID,
        clientSecret: process.env.Sec,
        refreshToken: process.env.REFRESH,
        accessToken: access_token
    }
});

module.exports = transporter;