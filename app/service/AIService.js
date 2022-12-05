const axios = require('axios');
const url = process.env.URL

exports.checkformality = async (req) => {
    try {
        const results = await axios.post(url+'/CheckFormality',{
        jobresponsibility: req.jobresponsibility
        })
        return results.data

    } catch (e) {
        return new Error('Failed to get formality scores')
    }
}