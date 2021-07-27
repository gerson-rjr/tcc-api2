const scrapSchema = require('./scrap')
const mongoose = require('../database/index')
const extraiDados = require('./webScraping')

async function salvarDados() {
    const objDados = await extraiDados();
    const tbscrap = mongoose.model('tbscrap', scrapSchema);
    const consulta = await tbscrap.find({ numeroAno: objDados.numeroAno });
    [...objDados].forEach(dados => {
        function estaVazio(obj) {
            for (const prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false
            }
            return true
        }
        if (estaVazio(consulta)) {
            const scrap = new tbscrap({
                numeroAno: dados.numeroAno,
                modalidade: dados.modalidade,
                situacao: dados.situacao,
                comissao: dados.comissao,
                dataPublicacao: dados.dataPublicacao,
                objeto: dados.objeto,
                valor: dados.valor
            });
            scrap.save(function (err, resultado) {
                if (err)
                    return console.log(err)
            });
            console.log('Scrap Realizado!');
        } else {
            console.log('Licitação já cadastrada.');
        }
    })


}
salvarDados();