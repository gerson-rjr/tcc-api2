const cheerio = require('cheerio');
const request = require('request-promise');

async function extraiDados(){
    const result = await request.get("https://coronavirus.natal.rn.gov.br/transparencia/licitacoes.html")
    const $ = cheerio.load(result);
    let webScraping = []
        // numeroAno: [],
        // modalidade: [],
        // situacao: [],
        // comissao: [],
        // dataPublicacao: [],
        // objeto: [],
        // valor: [],
    
    $("body > div > table > tbody > tr").each((index, element) => {
        const colunaCovid = $(element).find("td");
        const numeroAno = $(colunaCovid[0]).text();
        const modalidade = $(colunaCovid[1]).text();
        const situacao = $(colunaCovid[2]).text();
        const comissao = $(colunaCovid[3]).text();
        const dataPublicacao = $(colunaCovid[4]).text();
        const objeto = $(colunaCovid[5]).text();
        const valor = $(colunaCovid[6]).text();

        let linha = {numeroAno, modalidade, modalidade, situacao, comissao, dataPublicacao, objeto, valor}
        webScraping[index] = linha;
        // webScraping.modalidade = modalidade;
        // webScraping.situacao = situacao;
        // webScraping.comissao = comissao;
        // webScraping.dataPublicacao = dataPublicacao;
        // webScraping.objeto = objeto;
        // webScraping.valor = valor;
    });    
    return webScraping;
}

extraiDados();

module.exports = extraiDados;