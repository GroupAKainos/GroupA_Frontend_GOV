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

exports.viewjob = async (id) => {
    try {
        const results = await axios.get(url+'/viewupdatejob/'+ id)
        return results.data
    } catch (e) {
        return new Error('Failed to get job roles')
    }
}

exports.updateRole = async function (updRole) {
    const response = await axios.post('http://localhost:8080/api/editrole/', updRole)
    return response.data
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
        delete {req}
        return results.data

    } catch (e) {
        return new Error('Failed to add new role')
    }
}
