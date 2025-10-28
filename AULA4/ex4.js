var prompt = require('prompt-sync')();
var prompt = require('prompt-sync')();
const n1 = Number(prompt("Digite um numero: "))
const n2 = Number(prompt("Digite outro numero: "))
const operacao = prompt("Escolha entre + - / *: ")
const soma = n1 + n2
const divisao = n1 / n2
const subtracao = n1 - n2
const multiplicacao = n1 * n2
if(operacao === "+"){
    console.log(soma);
}else if(operacao === "-"){
    console.log(subtracao);
}else if(operacao === "*"){
    console.log(multiplicacao);
}else if(operacao === "/"){
    if(n2 === 0){
        console.log("Não é possivel dividir por 0");   
    }else{
        console.log(divisao);
    }
}else{
    console.log("Opção Invalida");
}
