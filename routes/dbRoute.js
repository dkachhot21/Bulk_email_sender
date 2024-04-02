const express = require('express');
const {saveEmail} = require('../controller/dbController');

const router = express.Router();

router.route('/save').post(saveEmail);

module.exports = router;