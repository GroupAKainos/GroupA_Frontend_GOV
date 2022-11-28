const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const employee = require('../service/employee')

router.get('/viewroles',  async (req, res) =>  {
    var s = await employee.viewjobroles()
    res.render('viewroles', { roles: s })
})

router.get('/viewcompetencies/:BandID',  async (req, res) =>  {
    var bandID = req.params.BandID
    var s = await employee.viewcompetency(bandID)

    res.render('competenciesperband', { comps: s, band: bandID })
})

module.exports = router
