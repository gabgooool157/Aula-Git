var prompt = require('prompt-sync')();

const degrau = 30
const alt = +prompt("Insire a altura total da escada em cm: ")
if (alt <= 0){
    console.log("Erro: a altura total da escada tem que ser positivo.")
}else {
    const numDegraus = Math.ceil(alt / degrau);
    console.log(`Para uma escada ${alt} cm, é necessário ${numDegraus}`)
}
