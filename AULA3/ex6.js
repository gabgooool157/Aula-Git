var prompt = require('prompt-sync')();
// se o usuario digitar 2 ou 8, mostrar "OK!!"
// se não, mostrar "Bah!!"
const n1 = Number(prompt("Digite um Numero... "))
if(n1 == 2 || n1 == 8){
    console.log("OK!!");
}else {
    console.log("Bah!!");
}