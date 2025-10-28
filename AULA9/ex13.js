var prompt = require('prompt-sync')();

let tipo = prompt("Qual o tipo de combustivel deseja abastecer? G para Gasolina e A para alcool: ")
let litros = +prompt("Quantos litros deseja abastecer?: ")
let valortotal = 0;
const a = 4.39 * litros 
const g = 5.89 * litros
if(tipo === 'g'){
    valortotal = g 
    console.log(`Você escolheu Gasolina. Preço por litro: R$ ${g}`) 
}else if(tipo === 'a'){
    valortotal = a
    console.log(`Você escolheu alcool. Preço por litro: R$ ${a}`)
}else{
    console.log('Erro')
}