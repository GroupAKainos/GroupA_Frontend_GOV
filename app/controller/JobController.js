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

router.get('/addnewjob',  async (req, res) =>  {
    let family = await employee.populatefamilylist()
    let capability = await employee.poulatecapabiltynamelist()
    let bandlevel = await employee.poulatebandlevellist()

   res.render('addnewrole', { family: family, capability:capability, bandlevel: bandlevel})
})

router.post('/addnewjob', async (req, res) => { 
console.log(req.body)
let addrole = await employee.addnewrole(req.body)         
if(addrole){
    // let s = await employee.viewjobroles()
    // res.render('viewroles', { roles: s })
    res.send(addrole)
}
})

module.exports = router
