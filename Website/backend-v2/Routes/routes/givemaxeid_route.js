const express = require('express');
const router = express.Router()
const Meds = require('../../Models/MedsModel.js')


router.post('/', (req, res) => {

    maxarr = [];
    const re1 = Meds.find({}).then((updatedDoc1) => {
        // console.log(updatedDoc1)
        const maxarrt = updatedDoc1.map((a) => {
            return a.id;
        })
        // const max = Math.max(...maxarrt)
        res.status(200).send(maxarrt);
    }).catch(err => {
        // console.log(err)
    })

});
module.exports = router
