const express = require('express');

const {saveEmail, getEmails, deleteEmail} = require('../controller/dbController');

const router = express.Router();

router.route('/email').post(saveEmail);
router.route('/email').get(getEmails);
router.route('/email').delete(deleteEmail);

module.exports = router;