var prompt = require('prompt-sync')();

const senhaC = 11
let tent1 = +prompt('Digite a senha: ')
let tent= 0
while(tent1 !== senhaC) {
    console.log('Você errou a senha, retardado.')
    tent1 = +prompt('Digite a senha: ')
    tent++
}
console.log('Você acertou a senha, parabéns.')
console.log(`Tentativas ${tent}`)