var prompt = require('prompt-sync')();

const em = ('lobatomito28@gmail.com');
const senhaC = 100;
let emD = prompt('Qual é o email?: ');
let senhaD = +prompt('Qual a senha?: ')
while(emD !== em || senhaD !== senhaC){
    console.log('Erro');
    emD= prompt('Qual é o email?: ');
    senhaD= +prompt('Qual a senha?: ')

}
console.log('Bem vindo Mestre!!!')