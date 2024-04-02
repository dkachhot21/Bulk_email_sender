const multer = require('multer');
const asyncHandler = require('express-async-handler');
const parseCSV = require('../config/parseCSV');
const parseXLSX = require('../config/parseXLSX');

const upload = multer({ dest: 'uploads/' });

const renderUploadForm = asyncHandler((req, res) => {
    res.render('uploadForm')
});

const uploadFile = asyncHandler(upload.single('file'), async (req, res) => {
    const file = req.file;
    if (file) {
        if (file.originalname.endsWith('.csv')) {
            await parseCSV(file);
        } else if (file.originalname.endsWith('.xlsx')) {
            await parseXLSX(file);
        } else {
            res.status(400).send('Invalid file type! Please use .csv or .xlsx files only.');
        }
    }
    res.status(200).send('File uploaded successfully');
});

module.exports = { renderUploadForm, uploadFile };
