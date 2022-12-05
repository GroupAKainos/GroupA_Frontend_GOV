const express = require('express')
const bcrypt = require("bcrypt")
const router = express.Router()
const userData = require('../service/UserService')


router.get('/register', function(req, res){ 
    res.render('register'); 
});

router.post('/register', async (req, res)=>{ 
    let user = req.body
    let encryptedPassword = await bcrypt.hash(user.password, 10)
    let response = await userData.registerUser(user.email, encryptedPassword, user.role, user.firstName, user.lastName)
    try {
        if(!response.data.token!=null) {
            var redirectTo = req.session.redirect_to || '/'
            delete req.session.redirectTo;
            res.cookie('auth', response.data.token, {secure:true});
            if(redirectTo == '/'){
            res.render('register', {success: 'true'})
            }else{
            res.redirect(redirectTo);
            }

        } else {
            res.render('register', {success: 'false'})
        }  
    } catch (e) {
        res.render('register', {success: 'false'})
    }
});

module.exports = router