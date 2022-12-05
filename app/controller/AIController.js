const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line
const ai = require('../service/AIService')
var cookieParser = require('cookie-parser')
router.use(cookieParser());
const isAuth = require('../middleware/Authorisation')

router.get('/CheckFormality',isAuth.Admin ,async (req, res) =>  {
    res.render('CheckFormality')
})

router.post('/CheckFormality',isAuth.Admin ,async (req, res) =>  {
    let s = await ai.checkformality(req.body)
    res.render('viewroles', { roles: s })
})

