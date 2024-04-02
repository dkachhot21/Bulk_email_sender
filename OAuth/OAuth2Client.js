const { google } = require('googleapis');
const dotenv = require('dotenv').config();
const asyncHandler = require('express-async-handler');


const OAuth2Client = new google.auth.OAuth2(
    process.env.YOUR_CLIENT_ID,
    process.env.YOUR_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
);

OAuth2Client.setCredentials({
    refresh_token: process.env.YOUR_REFRESH_TOKEN
});

const access_token = asyncHandler(OAuth2Client.getAccessToken());

module.exports = {OAuth2Client,access_token};