const asyncHandler = require('express-async-handler');
const Email = require('../models/emailsModel');
const { constants } = require('../constants');

// @desc    Save name, email and data
// @route   POST /db/email
// @access  Public
const saveEmail = asyncHandler(async (req, res) => {
    const { name, email, data } = req.body;
    //Check if all none of the fields are empty
    if (!email) {
        res.status(constants.BAD_REQUEST);
        throw new Error(`Email is Mandatory`);
    }

    if (!name) name = email.split('@')[0];

    if (!data) data = 'Nothing';

    const emailAvailable = await Email.findOne({ email });
    //If the email is already in use
    if (emailAvailable) {
        res.status(constants.CONFLICT);
        throw new Error("Email Already in DataBase");
    }
    const newEmail = await Email.create({
        name,
        email,
        data
    });

    if (newEmail) {
        res.status(constants.CREATED).json({
            message: "Data Saved Successfully",
            email: newEmail.email
        });
    } else {
        res.status(constants.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            email: email
        });
    }
});


// @desc    Get all emails
// @route   GET /db/email
// @access  Public
const getEmails = asyncHandler(async (req, res) => {
    const emails = await Email.find();
    res.status(constants.OK).json(emails);
});


// @desc    Delete email by ID
// @route   DELETE /db/email
// @access  Public
const deleteEmail = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const deletedEmail = await Email.findOneAndDelete({ email });
    if (!deletedEmail) {
        res.status(constants.NOT_FOUND);
        throw new Error('Email not found');
    }
    res.status(constants.OK).json({ message: 'Email deleted successfully', email: deletedEmail });
});

// @desc    Upload file to the DB used in sendEmailController
// @access  Public
const uploadToDatabase = asyncHandler(async (emails, res) => {
    const conflicts = [];

    for (const emailData of emails) {
        const { email, name, data } = emailData;
        const emailExists = await Email.findOne({ email });

        if (!email) {
            continue;
        }

        if (emailExists) {
            conflicts.push({ email, reason: 'Duplicate email' });
            continue;
        }

        await Email.create({ email, name, data });
    }

    if (conflicts.length > 0) {
        res.status(constants.OK).json({ CONFLICT: conflicts });
    } else {
        res.status(constants.CREATED).json({ message: 'Data saved successfully' });
    }
});


module.exports = { saveEmail, getEmails, deleteEmail, uploadToDatabase };