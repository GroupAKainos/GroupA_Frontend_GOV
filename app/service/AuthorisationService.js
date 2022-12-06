const CryptoJS = require('crypto-js');
const secretJ = process.env.ENCODED_SECRET_KEY

exports.Decrypt = async (tokenToDeCrypt) => {
    var parsedBase64Key = CryptoJS.enc.Base64.parse(secretJ);
    var decryptedData = CryptoJS.AES.decrypt(tokenToDeCrypt, parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);


    return decryptedData
}