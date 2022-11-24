const express = require('express');
const verifyToken = require('../../Helpers/verifytoken.js')
const router = express.Router()
const Trans = require('../../Models/TransactionModel.js')

router.use(verifyToken)
router.post('/', (req, res) => {
    // console.log("dfghjk")
    const re1 = Trans.find({ to: req.body.acc, meds: { $ne: 0 } }).then((updatedDoc1) => {
        // console.log("not")
        res.status(200).send(updatedDoc1);
    }).catch(err => {
        // console.log(err)
    })

});
module.exports = router
