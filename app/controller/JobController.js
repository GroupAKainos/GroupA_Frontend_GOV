const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const job = require('../service/JobService')

const userData = require('../service/UserService')

router.get('/viewroles',  async (req, res) =>  {
    let s = await job.viewjobroles()
    res.render('viewroles', { roles: s })
})

router.get('/viewcompetencies/:BandID',  async (req, res) =>  {
    let bandID = req.params.BandID
    let s = await job.viewcompetency(bandID)

    res.render('competenciesperband', { comps: s, band: bandID })
})

router.get('/register', function(req, res){ 
    res.render('register'); 
});

router.post('/register', async (req, res)=>{ 
    var user = req.body 
    let insertedKey = await userData.registerUser(user.email, user.password, user.role)
    res.render('register'); 
});

module.exports = router
