const express = require('express');
const sell = require('../../controllers/sell.js');
const verifyToken = require('../../Helpers/verifytoken.js')
const router = express.Router()


router.use(verifyToken)
router.post('/', sell);
module.exports = router