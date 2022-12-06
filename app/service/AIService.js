const axios = require('axios');
const url = process.env.AIURL

exports.checkformality = async (req) => {
    try {
        const results = await axios.post(url,req)
        return results.data

    } catch (e) {
        console.log(e)
        return new Error('Failed to get formality scores')
    }
}