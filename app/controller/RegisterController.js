const express = require('express')
const secret = process.env.PASS_SECRET_KEY
const sha512 = require('js-sha512');
const router = express.Router()
var cookieParser = require('cookie-parser')
router.use(cookieParser());
const userData = require('../service/RegisterService')


router.get('/register', function (req, res) {
    res.render('register');
});

router.post('/register', async (req, res) => {
    let user = req.body
    let encryptedPassword = await sha512.hmac(secret, user.password);
    let response = await userData.registerUser(user.email, encryptedPassword, user.role, user.firstName, user.lastName)
    try {
        if(response.data.token!==undefined) {
            res.render('register', {success: 'true'})
            }
            else {
            res.render('register', { success: 'false' })
        }
    } catch (e) {
        res.render('register', { success: 'false' })
    }
});

module.exports = router