const axios = require('axios');


exports.viewjobroles = async () => {
    try {
        const results = await axios.get('http://localhost:8080/api/viewjobroles')
        return results.data

    } catch (e) {
        return new Error('Failed to get job roles')
    }
}
