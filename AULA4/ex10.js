var prompt = require('prompt-sync')();
const user = prompt("Digite seu nome no sistema: ")
const password = prompt("Digite sua senha: ")
if(user == "admin" && password == "1234"){
    console.log("Acesso Liberado!!");
}else{
    console.log("Falha no login");
}