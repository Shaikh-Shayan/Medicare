const express = require('express');
const verifyToken = require('../../Helpers/verifytoken.js')
const router = express.Router()
const Trans = require('../../Models/TransactionModel.js')


router.use(verifyToken)

router.post('/', (req, res) => {

    // console.log("sxdcftgyhujkxsdcfvbhjmk,dcfvgbhjmk,")
    // console.log(req.body.acc)
    const re1 = Trans.find({ from: req.body.acc }).then((updatedDoc1) => {
        // console.log(updatedDoc1)
        res.status(200).send(updatedDoc1);
    }).catch(err => {
        // console.log(err)
    })

});
module.exports = router
