const asyncHandler = require('express-async-handler');
const Email = require('../models/emailsModel');
const sendEmailFunc = require('../config/sendFunction');
const dotenv = require('dotenv').config();

//@desc send email to the list
//@route GET /sendEmails
//@access Public
const sendEmailController = asyncHandler(async (req,res)=>{
    const emails=await Email.find();
    if(!emails.length) return res.status(404).json({msg:'No emails found'});
    emails.forEach(async (emailObj) =>{
        const to = emailObj.email;
        const teamLeadName = emailObj.name;
        const subject = `Hello ${teamLeadName}, regarding your team's progress`;
        const html = `<p>Dear ${teamLeadName},</p>
                  <p>This is an automated email regarding your team's progress.</p>
                  <p>Please find the details below:</p>
                  <p>${emailObj.data}</p>
                  <p>Regards,</p>
                  <p>Deepak</p>`;

        sendEmailFunc(to, subject, html, emailObj.data);
    });

    res.send('Emails sent successfully');
})

module.exports = sendEmailController;