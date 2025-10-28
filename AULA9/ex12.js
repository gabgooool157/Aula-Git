var prompt = require('prompt-sync')();

let velmax = +prompt("Digite a velocidade máxima permitida na via: ")
let velcond = +prompt("Digite a velocidade do condutor: ")
let classificacao = ''; 
const limitLeve = velmax * 1.20
const limitGrave = velmax * 1.50
const limitMin = velmax / 2
if(velcond > limitGrave){
    classificacao = 'Infração MUITO GRAVE'
}else if(velcond > velmax) {
    classificacao = 'Infração grave'
}else if(velcond > limitMin){
    classificacao = 'Infração leve'
}else {
    classificacao = 'velocidade dentro do limite'
}
console.log(`classificação: ${classificacao}`)