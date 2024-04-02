const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv').config();
const Email = require('../models/emailsModel');
const { constants } = require('../constants');

// @desc    Save name, email and data
// @route   POST /db/save
// @access  Public
const saveEmail = asyncHandler(async (req,res)=>{
    const { name, email, data } = req.body;
    //Check if all none of the fields are empty
    if (!name || !email || !data) {
        res.status(constants.BAD_REQUEST);
        throw new Error(`All Fields are Mandatory`);
    }
    const emailAvailable = await Email.findOne({email});
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
    if(newEmail){
        res.status(constants.CREATED).json({
            message: "Data Saved Successfully",
            email:newEmail.email
        });
    }else{
        res.status(constants.INTERNAL_SERVER_ERROR).json({message:"Something went wrong!"});
    }
});

module.exports = {saveEmail};