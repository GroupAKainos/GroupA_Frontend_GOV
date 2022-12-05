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
        return new Error('Failed to get list of families')
    }
}
exports.poulatecapabiltynamelist = async () => {
    try {
        const results = await axios.get(url+'/populatecapabiltylist')
        return results.data

    } catch (e) {
        return new Error('Failed to get list of capabilites')
    }
}
exports.poulatebandlevellist = async () => {
    try {
        const results = await axios.get(url+'/populatebandlevelist')
        return results.data

    } catch (e) {
        return new Error('Failed to get list of band levels')
    }
}
exports.addnewrole = async (req, res) => {
    try {
        const results = await axios.post(url+'/addnewrole',
        {
            "jobName":req.jobName,
            "jobResponsibility": req.jobResponsibility,
            "specSummary": req.specSummary,
            "bandLevelId": req.bandLevelId,
            "jobFamilyId": req.jobFamilyId,
            "capabilityId": req.capabilityId
        })

        return results.data

    } catch (e) {
        return new Error('Failed to add new role')
    }
}
