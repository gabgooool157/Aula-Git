const { somar, subtrair, multiplicar, dividir } = require('./operacoesMat');

var prompt = require('prompt-sync')();

const n1 = +prompt("Digite um valor: ")
const n2 = +prompt("Digite outro valor: ")
let operacao
while(true){
    operacao = prompt("Escolha uma operação + - / *: ")
    if(operacao == "+"){
        console.log(somar(n1,n2));
        continue
    }else if(operacao == "-"){
        console.log(subtrair(n1,n2));
        continue
    }else if(operacao == "*"){
        console.log(multiplicar(n1,n2));
        continue
    }else if(operacao == "/"){
        console.log(dividir(n1,n2));
        continue
    }else{
        console.log("Operação Incorreta");
        break
    }
}
