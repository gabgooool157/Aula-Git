var prompt = require('prompt-sync')();

const n1 = Number(prompt('Digite um número: '))
const n2 = Number(prompt('Digite outro número: '))

const soma = n1 + n2
const div = n1 / n2
const mult = n1 * n2
const sub = n1 - n2
console.log(`A soma é: ${soma}`);
console.log(`A divisão é: ${div}`);
console.log(`A multiplicação é: ${mult}`);
console.log(`A subtração é: ${sub}`);




