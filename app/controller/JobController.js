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
    if(req.body.jobName.length < 5 ){
        let family = await employee.populatefamilylist()
        let capability = await employee.poulatecapabiltynamelist()
        let bandlevel = await employee.poulatebandlevellist()

        res.locals.errormessage = "Jobname length is under 5 characters role has not been created"
        res.render('addnewrole', { req: req.body ,family: family, capability:capability, bandlevel: bandlevel})

    }else if(req.body.jobResponsibility.length < 10){
        let family = await employee.populatefamilylist()
        let capability = await employee.poulatecapabiltynamelist()
        let bandlevel = await employee.poulatebandlevellist()

        res.locals.errormessage = "Job Responsibility length is under 10 characters role has not been created"
        res.render('addnewrole', { req: req.body ,family: family, capability:capability, bandlevel: bandlevel})
    }else if( req.body.specSummary.length < 8){
        let family = await employee.populatefamilylist()
        let capability = await employee.poulatecapabiltynamelist()
        let bandlevel = await employee.poulatebandlevellist()

        res.locals.errormessage = "Specification summary length is under 8 characters role has not been created"
        res.render('addnewrole', { req: req.body ,family: family, capability:capability, bandlevel: bandlevel})
    }else{
        let addrole = await employee.addnewrole(req.body)
        
        if(!(addrole instanceof Error)){
        let message = "New role has been added"
        let s = await employee.viewjobroles()
        res.render('viewroles', { roles: s, newrolesuccess: message})
        }else{
        let family = await employee.populatefamilylist()
        let capability = await employee.poulatecapabiltynamelist()
        let bandlevel = await employee.poulatebandlevellist()

        res.locals.errormessage = "Theres been an error adding new role please try again "
        res.render('addnewrole', { req: req.body ,family: family, capability:capability, bandlevel: bandlevel})
        }
    }
})

module.exports = router
