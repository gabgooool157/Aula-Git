var prompt = require('prompt-sync')();
const senhaC = 122
let senha = +prompt('Digite a senha: ')
while(senha !== 122){
    console.log('Erro');
    senha = +prompt('Digite a senha: ')
    
}
console.log('Senha correta');

