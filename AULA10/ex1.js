var prompt = require('prompt-sync')();

const usu = +prompt('Digite um número: ')
const usu2 = +prompt('Digite outro número: ')
function somar(n1,n2) {
    return n1 + n2
}
console.log(somar(usu,usu2));
