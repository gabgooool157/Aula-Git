var prompt = require('prompt-sync')();

let dia = +prompt("Digite um número de 0 a 6: ")
let nomeDia;

if(dia == 0){
    nomeDia = "Domingo"
    
}else if(dia == 1){
    nomeDia = "Segunda"

}else if(dia == 2){
    nomeDia = "Terça"
}else if(dia == 3){
    nomeDia = "Quarta"
}else if(dia == 4){
    nomeDia = "Quinta"
}else if(dia == 5){
    nomeDia == "Sexta"
}else if(dia == 6){
    nomeDia = "Sabado"
}else {
    console.log("Número invalido.")
}
console.log(nomeDia)