const express=require('express');
const sendEmailController = require('../controller/sendEmailController');

const router = express.Router();

router.route('/').get(sendEmailController);

module.exports = router;