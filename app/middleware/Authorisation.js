const express = require('express')
const jwt_decode = require('jwt-decode');
const decrypt = require('../service/AuthorisationService')

module.exports.Employee = async (req, res, next) => {
    try {
        const token = await req.cookies.auth
        if (!token) {
            req.session.redirect_to = req.path
            return res.redirect('/login');
        }
        let decrypted = await decrypt.Decrypt(token)
        let decoded = await jwt_decode(decrypted);
        if (!decoded.role === 'Admin' && !decoded.role === 'Employee') {
            req.session.redirect_to = req.path
            return res.redirect('/login');
        }
        next()
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};

module.exports.Admin = async (req, res, next) => {
    try {
        const token = req.cookies.auth
        if (!token) {
            req.session.redirect_to = req.path
            return res.redirect('/login');
        }
        let decrypted = await decrypt.Decrypt(token)
        let decoded = await jwt_decode(decrypted);
        if (decoded.role !== 'Admin') {
            req.session.redirect_to = req.path
            return res.redirect('/viewroles');
        }
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};

exports.ReturnRole = async (req) => {
    const token = req.cookies.auth
    if (!token) {
        req.session.redirect_to = req.path
        return false;
    }
    const decrypted = await decrypt.Decrypt(token)
    const decoded = await jwt_decode(decrypted);
    return decoded.role == 'Admin';
};

