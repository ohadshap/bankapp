const express = require('express')
const request = require('request')
const router = express.Router()
const Transaction = require('../models/transactionSchema')



router.get('/transactions', async function (req, res) {
    let transactions = await Transaction.find({})
    res.send(transactions)
})

router.post('/transaction', async function(req, res) {
    let transaction = new Transaction(req.body)
    console.log(transaction)
    await transaction.save()
    res.end()
})

router.delete('/transaction/:id', async function(req, res) {
    const transactionId = req.params.id
    await Transaction.findOneAndDelete({
        _id: transactionId    
    })
    // res.end()
    res.send(transactionId)
})




module.exports = router