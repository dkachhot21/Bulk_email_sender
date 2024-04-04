const express = require('express');
const { sendEmailController } = require('../controller/sendEmailController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Send Email
 *   description: Email Sending
 */

/**
 * @swagger
 * /sendEmails:
 *   get:
 *     summary: Send emails
 *     description: Send emails to all recipients in the database.
 *     tags: [Send Email]
 *     responses:
 *       '200':
 *         description: Emails sent successfully
 *       '404':
 *         description: No emails found
 */
router.route('/').get(sendEmailController);

module.exports = router;