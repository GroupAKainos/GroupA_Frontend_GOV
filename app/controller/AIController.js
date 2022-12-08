const express = require('express')
const router = express.Router()
const ai = require('../service/AIService')
const isAuth = require('../middleware/Authorisation')

router.get('/formality', isAuth.Admin, async (req, res) => {
    res.render('CheckFormality')
})

router.post('/formality', isAuth.Admin, async (req, res) => {


    if (req.body.jobResponsibility.length < 5) {
        message = "Job responsibility must be over 5 characters"
        res.render('CheckFormality', { jobResponsibility: req.body.jobResponsibility, errormessage: message, })
    } else {
        let s = await ai.checkformality(req.body.jobResponsibility)

        let array = []
        let object;

        //Format into consumable JSON object that frontend can use 
        for (let i = 0; i < s.sentences.length; i++) {
            object = {
                sentences: s.sentences[i],
                scores: s.scores[i],
                formality: s.formality[i]
            }
            array.push(object)
        }
        res.render('OutputFormality', { datareturned: array })
    }
})

module.exports = router