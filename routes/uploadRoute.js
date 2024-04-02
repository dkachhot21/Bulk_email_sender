const express = require('express');

const { renderUploadForm, uploadFile } = require('../controller/uploadController');

const router = express.Router();

router.route('/').get(renderUploadForm);
router.route('/').post(uploadFile);

module.exports = router;
