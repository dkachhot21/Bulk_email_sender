const express = require('express');
const multer = require('multer');

const { renderUploadForm, uploadFile } = require('../controller/uploadController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

/**
 * @swagger
 * tags:
 *   name: File upload
 *   description: File uploading
 */

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload file
 *     description: Upload a CSV or XLSX file and save data to the database.
 *     tags: [File upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: File uploaded and processed successfully
 *       '400':
 *         description: No file uploaded or invalid file type
 *       '500':
 *         description: Error processing the file
 */
router.route('/').get(renderUploadForm);
router.route('/').post(upload.single('file'), uploadFile);

module.exports = router;
