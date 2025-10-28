var prompt = require('prompt-sync')();
function saudarAluno(nome){
    console.log(`Olá, ${nome}!`);
    return 'Saudação enviada'
}
saudarAluno('Ana')
//
function somar(n1,n2) {
    return n1 + n2
}
console.log(somar(3,5));
//
function dobro(n1) {
    return n1 * 2
}
console.log(dobro(10));
