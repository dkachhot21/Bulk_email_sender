const asyncHandler = require('express-async-handler');
const Email = require('../models/emailsModel');
const sendEmailFunc = require('../config/sendFunction');

//@desc send email to the list
//@route GET /sendEmails
//@access Public
const sendEmailController = asyncHandler(async (req, res) => {
    const emails = await Email.find();
    if (!emails.length) return res.status(404).json({ msg: 'No emails found' });
    for (const emailObj of emails) {
        const { email, name, data } = emailObj;
        const subject = `Hello ${name}, regarding your team's progress`;
        const html = `<p>Dear ${name},</p>
                  <p>This is an automated email regarding your team's progress.</p>
                  <p>Please find the details below:</p>
                  <p>${data}</p>
                  <p>Regards,</p>
                  <p>Deepak</p>`;

        sendEmailFunc(email, subject, html, data);
    }

    res.send('Emails sent successfully');
});

module.exports = { sendEmailController };