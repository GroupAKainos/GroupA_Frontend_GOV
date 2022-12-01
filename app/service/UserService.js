const axios = require('axios');
const url = process.env.URL

exports.registerUser = async (email, password, role) => { 
    try {
        const response = await axios.post(url+'/register', { "email": email, "password": password, "role": role })
        return response.data
    } catch (e) {
        if((e+'').includes('Request failed with status code 500'))
            return new Error('Could not register user')
        if((e+'').includes('Request failed with status code 400'))
            return new Error('Invalid data')
        return new Error('Error')
    }
}