const express = require('express')
var cookieParser = require('cookie-parser')
const router = express.Router()
router.use(cookieParser());
const jwt_decode = require('jwt-decode');
const decrypt = require('../service/UserService')

module.exports.Employee = async (req, res, next) => {
    try {
        const token = await req.cookies.auth
        console.log("This is a token" + token)
        if (!token) {
        req.session.redirect_to = req.path
        return res.redirect('/register');
        }
        let decrypted = await decrypt.Decrypt(token)
        console.log("Inside Auth this is decrypted token: " + decrypted )
        let decoded = await jwt_decode(decrypted);
        if (!decoded.role == 'Admin' && !decoded.role =='Employee') {
        req.session.redirect_to = req.path
        return res.redirect('/register');
        }

        next();
    } catch (error) {
        console.log(error)
        res.status(400).send("Invalid token");
    }
};

module.exports.Admin = (req, res, next) => {
    try {
        const token = req.cookies.auth
        if (!token) {
        req.session.redirect_to = req.path
        return res.redirect('/register');
        }
        let decoded = jwt_decode(token);
        if (decoded.role != 'Admin') {
            req.session.redirect_to = req.path
            return res.redirect('/register');
        }

        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
 }

