var prompt = require('prompt-sync')();
const base = +prompt("Digite o valor da base: ")
const altura = +prompt("Digite o valor da altura: ")

if (base <= 0 || altura <= 0) {
    console.log("Valores inválidos!")
   
} else { 
    const area = (base * altura) / 2;
    console.log('Área do triângulo: + ${area}')

}
