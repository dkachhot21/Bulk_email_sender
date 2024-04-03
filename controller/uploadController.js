// const multer = require('multer');
const asyncHandler = require('express-async-handler');
const parseCSV = require('../config/parseCSV');
const parseXLSX = require('../config/parseXLSX');

// const upload = multer();

// @desc    Show the upload form
// @route   GET /db/upload
// @access  Public
const renderUploadForm = asyncHandler((req, res) => {
    res.render('uploadForm')
});


// @desc    Upload CSV or XLSX file and save data to DB
// @route   POST /db/upload
// @access  Public
const uploadFile = asyncHandler(/* upload.single('file'), */ async (req, res) => {
    const { file } = req;
    if (file) {
        if (file.originalname.endsWith('.csv')) {
            await parseCSV(file, res);
        } else if (file.originalname.endsWith('.xlsx')) {
            await parseXLSX(file, res);
        } else {
            res.status(400).send('Invalid file type! Please use .csv or .xlsx files only.');
        }
    }
    // res.status(200).send('File uploaded successfully');
});

module.exports = { renderUploadForm, uploadFile };
