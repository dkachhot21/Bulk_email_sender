const { google } = require('googleapis');
const dotenv = require('dotenv').config();
const asyncHandler = require('express-async-handler');


const OAuth2Client = new google.auth.OAuth2(
    process.env.ID,
    process.env.Sec,
    'https://developers.google.com/oauthplayground'
);

OAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH
});

const access_token = asyncHandler(OAuth2Client.getAccessToken());

module.exports = {OAuth2Client,access_token};