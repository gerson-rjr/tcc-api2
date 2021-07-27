const express = require('express')
const router = express.Router();
const Scrap = require('../models/scrap')


router.get('/', async (req, res) => {
    
    try {
        const licitacoes = await Scrap.find();
        return res.send({ licitacoes });
    } catch (err) {
        res.status(400).send('Bad request')
    }

})

router.get('/:licitacaoId', async(req, res) => {

    try {
        res.send({ ok: true })
    } catch (err) {
        res.status(400).send('Bad request')
    }

})

module.exports = app => app.use('/licitacoes', router)