const expressAsyncHandler = require("express-async-handler");
const transporter = require("./transporterFunc");
const dotenv = require('dotenv').config();

const sendEmailFunc = expressAsyncHandler(async (to, subject, html, data) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        html: html,
        data:data
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', to);
        } else {
            console.log('Email sent to:', to);
        }
    });
});

module.exports = sendEmailFunc;