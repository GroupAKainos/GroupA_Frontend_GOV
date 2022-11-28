const axios = require('axios');


exports.viewjobroles = async () => {
    try {
        const results = await axios.get('http://localhost:8080/api/viewjobroles')
        return results.data

    } catch (e) {
        return new Error('Failed to get job roles')
    }
}

exports.viewcompetency = async (bandID) => {
    try {
        const results = await axios.get('http://localhost:8080/api/viewcompetency/'+bandID)
        return results.data

    } catch (e) {
        return new Error('Failed to get comptencies for band')
    }
}