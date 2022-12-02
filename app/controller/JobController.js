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
    let family = await job.populatefamilylist()
    let capability = await job.poulatecapabiltynamelist()
    let bandlevel = await job.poulatebandlevellist()

   res.render('addnewjob', { family: family, capability:capability, bandlevel: bandlevel})
})

router.post('/addnewjob', async (req, res) => { 
    //Frontend validation - returns the req body and list so user doesnt lose any information they had typed if the check fails
    if(req.body.jobName.length < 5 ){
        let family = await job.populatefamilylist()
        let capability = await job.poulatecapabiltynamelist()
        let bandlevel = await job.poulatebandlevellist()

        res.locals.errormessage = "Jobname length is under 5 characters role has not been created"
        res.render('addnewjob', { req: req.body ,family: family, capability:capability, bandlevel: bandlevel})

    }else if(req.body.jobResponsibility.length < 10){
        let family = await job.populatefamilylist()
        let capability = await job.poulatecapabiltynamelist()
        let bandlevel = await job.poulatebandlevellist()

        res.locals.errormessage = "Job Responsibility length is under 10 characters role has not been created"
        res.render('addnewjob', { req: req.body ,family: family, capability:capability, bandlevel: bandlevel})
    }else if( req.body.specSummary.length < 8){
        let family = await job.populatefamilylist()
        let capability = await job.poulatecapabiltynamelist()
        let bandlevel = await job.poulatebandlevellist()

        res.locals.errormessage = "Specification summary length is under 8 characters role has not been created"
        res.render('addnewjob', { req: req.body ,family: family, capability:capability, bandlevel: bandlevel})
    }else{
        let addrole = await job.addnewrole(req.body)
        
        // If the value returned from the job service is not equal to an error render the view roles page with added role and message to user
        // Else populate lists return the data entered and render the addnewroles page with message to let the user know
        if(!(addrole instanceof Error)){
        let message = "New role has been added"
        let s = await job.viewjobroles()
        res.render('viewroles', { roles: s, newrolesuccess: message})
        }else{
        let family = await job.populatefamilylist()
        let capability = await job.poulatecapabiltynamelist()
        let bandlevel = await job.poulatebandlevellist()

        res.locals.errormessage = "Theres been an error adding new role please try again "
        res.render('addnewjob', { req: req.body ,family: family, capability:capability, bandlevel: bandlevel})
        }
    }
})

module.exports = router
