const axios = require('axios');
const url = process.env.URL
const CryptoJS = require('crypto-js');
const secretJ = process.env.ENCODED_SECRET_KEY

exports.registerUser = async (email, password, role, firstName, lastName) => {
    try {
        const response = await axios.post(url + '/register', { email: email, password: password, role: role, firstName: firstName, lastName: lastName })
        return response
    } catch (e) {
        if ((e + '').includes('Request failed with status code 500'))
            return new Error('Could not register user')
        if ((e + '').includes('Request failed with status code 400'))
            return new Error('Invalid data')
        return new Error('Error')
    }
}

exports.loginUser = async (email, password) => {
    try {
        const response = await axios.post(url + '/login', { email: email, password: password, role: '', firstName: '', lastName: '' })
        return response
    } catch (e) {
        if ((e + '').includes('Request failed with status code 500'))
            return new Error('Could not register user')
        if ((e + '').includes('Request failed with status code 400'))
            return new Error('Invalid data')
        return new Error('Error')
    }
}

exports.Decrypt = async (tokenToDeCrypt) => {
    var parsedBase64Key = CryptoJS.enc.Base64.parse(secretJ);
    var decryptedData = CryptoJS.AES.decrypt(tokenToDeCrypt, parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);


    return decryptedData
}