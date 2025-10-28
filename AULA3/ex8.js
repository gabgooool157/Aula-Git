var prompt = require('prompt-sync')();
// validar se um valor esta entre 10 e 30
const n1 = +prompt("Digite um numero: ")
if(n1>=10 && n1<=30){
    console.log(n1, "é nois....");
}else{
    console.log("Não é nois...");
}