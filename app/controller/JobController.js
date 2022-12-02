const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const job = require('../service/JobService')

router.get('/viewroles',  async (req, res) =>  {
    let s = await job.viewjobroles()
    res.render('viewroles', { roles: s })
})

router.get('/viewcompetencies/:BandID',  async (req, res) =>  {
    let bandID = req.params.BandID
    let s = await job.viewcompetency(bandID)

    res.render('competenciesperband', { comps: s, band: bandID })
})

module.exports = router
