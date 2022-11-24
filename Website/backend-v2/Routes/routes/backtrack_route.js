const express = require('express');
const verifyToken = require('../../Helpers/verifytoken.js')
const router = express.Router()
const backtract = require('../../controllers/backtract.js');


router.use(verifyToken)
router.post('/',backtract);
module.exports = router
