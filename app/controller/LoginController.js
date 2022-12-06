const express = require('express')
const secret = process.env.PASS_SECRET_KEY
const sha512 = require('js-sha512');
const router = express.Router()

const userData = require('../service/LoginService')

router.get('/login', function(req, res){ 
    res.render('login'); 
});

router.post('/login', async (req, res)=>{ 
    let user = req.body
    let encryptedPassword = await sha512.hmac(secret, user.password);
    let response = await userData.loginUser(user.email, encryptedPassword)
    try {
        if(response.data.token!==undefined) {
                res.cookie('auth', response.data.token, {secure:true})
                //res.render('login', {success: 'true'})
                return res.redirect('/viewroles')
            } else {
                res.render('login', {success: 'false'})
            }  
        } catch (e) {
            res.render('login', {success: 'false'})
            console.log(e)
        }
});

module.exports = router