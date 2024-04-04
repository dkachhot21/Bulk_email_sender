const express = require('express');

const {saveEmail, getEmails, deleteEmail} = require('../controller/dbController');

const router = express.Router();

/**
 * @swagger
 * /db/email:
 *   post:
 *     summary: Save email
 *     description: Save name, email, and data to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               data:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Email saved successfully
 *       '400':
 *         description: Bad request
 *       '409':
 *         description: Email already exists
 *   get:
 *     summary: Get all emails
 *     description: Retrieve all email records from the database.
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '404':
 *         description: No emails found
 *   delete:
 *     summary: Delete email
 *     description: Delete an email record from the database by email address.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *         description: Email address to delete
 *     responses:
 *       '200':
 *         description: Email deleted successfully
 *       '404':
 *         description: Email not found
 */
router.route('/email').post(saveEmail);
router.route('/email').get(getEmails);
router.route('/email').delete(deleteEmail);

module.exports = router;