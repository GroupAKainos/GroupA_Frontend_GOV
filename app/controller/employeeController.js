const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const employee = require('../service/employee')

router.get('/viewroles',  async (req, res) =>  {
    var s = await employee.viewjobroles()
    res.render('viewroles', { roles: s })
})

module.exports = router
