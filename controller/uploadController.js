// const multer = require('multer');
const asyncHandler = require('express-async-handler');
const parseCSV = require('../config/parseCSV');
const XLSX = require('xlsx');
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
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    const filePath = file.path;
    console.log('Uploaded file path:', filePath);

    if (!file.originalname.endsWith('.csv') && !file.originalname.endsWith('.xlsx')) {
        return res.status(400).send('Invalid file type! Please use .csv or .xlsx files only.');
    }

    try {
        if (file.originalname.endsWith('.xlsx')) {
            console.log('Converting XLSX to CSV...');
            const workBook = XLSX.readFile(filePath);
            const csvFilePath = `${filePath}.csv`;
            XLSX.writeFile(workBook, csvFilePath, { bookType: "csv" });
            console.log('XLSX converted to CSV successfully. CSV file path:', csvFilePath);
            await parseCSV(csvFilePath, res);
        } else {
            console.log('Using uploaded CSV file:', filePath);
            await parseCSV(filePath, res);
        }
    } catch (error) {
        console.error('Error during file processing:', error);
        return res.status(500).send('Error processing the file.');
    }
});

module.exports = { renderUploadForm, uploadFile };
