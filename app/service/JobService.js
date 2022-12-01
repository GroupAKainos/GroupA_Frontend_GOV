const axios = require('axios');
const url = process.env.URL

exports.viewjobroles = async () => {
    try {
        const results = await axios.get(url+'/viewjobroles')
        return results.data

    } catch (e) {
        return new Error('Failed to get job roles')
    }
}

exports.viewcompetency = async (bandID) => {
    try {
        const results = await axios.get(url+'/viewcompetency/'+bandID)
        return results.data

    } catch (e) {
        return new Error('Failed to get comptencies for band')
    }
}

exports.populatefamilylist = async () => {
    try {
        const results = await axios.get(url+'/populatefamilylist')
        return results.data

    } catch (e) {
        return new Error('Failed to get comptencies for band')
    }
}
exports.poulatecapabiltynamelist = async () => {
    try {
        const results = await axios.get(url+'/populatecapabiltylist')
        return results.data

    } catch (e) {
        return new Error('Failed to get comptencies for band')
    }
}
exports.poulatebandlevellist = async () => {
    try {
        const results = await axios.get(url+'/populatebandlevelist')
        return results.data

    } catch (e) {
        return new Error('Failed to get comptencies for band')
    }
}
exports.addnewrole = async (newrole) => {
    console.log(newrole.jobResponsibility)
    try {
        const results = await axios.post(url+'/addnewrole',
        {
            "jobName":newrole.jobName,
            "jobResponsibility": newrole.jobResponsibility,
            "specSummary": newrole.specSummary,
            "bandLevelId": newrole.bandLevelId,
            "jobFamilyId": newrole.jobFamilyId,
            "capabilityId": newrole.capabilityId
        })

        return results.data

    } catch (e) {
        return new Error('Failed to get comptencies for band')
    }
}
// router.post('/addcity', async (req, res) => { 
//     var city = req.body 
//     // validate here 
//     var countrycode = await req.body.CountryCode; 
//     if(!countrycode.search(/^(GBR|IRL)$/)){ 
//         let insertedKey = await citydata.addCity(req.body) 
//         res.render('list-cities', { cities: await citydata.getCities()} ) 
//     } else {
//     res.locals.errormessage = "Country code must be GBR or IRL" 
//     res.render('newcityform', req.body ) 
//   }
// })