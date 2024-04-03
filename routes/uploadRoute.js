const express = require('express');
const multer = require('multer');

const { renderUploadForm, uploadFile } = require('../controller/uploadController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.route('/').get(renderUploadForm);
router.route('/').post(upload.single('file'), uploadFile);

module.exports = router;
