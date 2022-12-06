const axios = require('axios');
const url = process.env.URL

exports.loginUser = async (email, password) => { 
    try {
        const response = await axios.post(url+'/login', { email: email, password: password, role: '', firstName: '', lastName: ''})
        return response
    } catch (e) {
        if((e+'').includes('Request failed with status code 500'))
            return new Error('Could not register user')
        if((e+'').includes('Request failed with status code 400'))
            return new Error('Invalid data')
        return new Error('Error')
    }
}