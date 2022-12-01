const axios = require('axios');
const url = process.env.URL

exports.registerUser = async (email, password, role) => { 
    const response = await axios.post(url+'/register', { "email": email, "password": password, "role": role })
    return response.data
}