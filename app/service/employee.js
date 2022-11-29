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