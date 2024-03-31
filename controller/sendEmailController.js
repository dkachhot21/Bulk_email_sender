const asyncHandler = require('express-async-handler');
const Emails = require('../models/emailsModel');
const sendEmailFunc = require('../config/sendFunction');
const dotenv = require('dotenv').config();
const jsonData = require('../mail');

//@desc send email to the list
//@route GET /sendEmails
//@access Public
const sendEmailController = asyncHandler(async (req,res)=>{
    jsonData.emails.forEach(emailObj => {
        const to = emailObj.email;
        const teamLeadName = emailObj.data.teamLeadName; // Assuming 'teamLeadName' is a dynamic detail
        const subject = `Hello ${teamLeadName}, regarding your team's progress`;
        const html = `<p>Dear ${teamLeadName},</p>
                  <p>This is an automated email regarding your team's progress.</p>
                  <p>Please find the details below:</p>
                  <p>${emailObj.data.details}</p>
                  <p>Regards,</p>
                  <p>Your Name</p>`; // Update 'Your Name' accordingly

        sendEmailFunc(to, subject, html, emailObj.data.details);
    });

    res.send('Emails sent successfully');
})

module.exports = sendEmailController;