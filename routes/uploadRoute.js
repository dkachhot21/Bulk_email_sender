const express = require('express');
const router = express.Router();
const { renderUploadForm, uploadFile } = require('../controller/uploadController');

router.route('/').get(renderUploadForm);
router.route('/').post(uploadFile);

module.exports = router;
