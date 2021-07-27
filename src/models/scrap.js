const mongoose = require('../database')

const scrapSchema = mongoose.Schema({
    numeroAno: String,
    modalidade: String,
    situacao: String,
    comissao: String,
    dataPublicacao: String,
    objeto: String,
    valor: String
});

const Scrap = mongoose.model('tbscrap', scrapSchema)
module.exports = Scrap;