var prompt = require('prompt-sync')();
// Permitir acesso se o usuario for "admin"
// e a senha "133"
const username = prompt("Digite seu nome no sistema: ")
const password = prompt("Digite sua senha: ")
if(username == "admin" && password == "133"){
    console.log("Acesso Liberado!!");
}else{
    console.log("Acesso negado!!");
}