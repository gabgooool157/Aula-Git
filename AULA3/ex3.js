var prompt = require('prompt-sync')();
// Pedir para o aluno digitar o numero da sala,
// se for 101 informar é no andar de baixo
// se for 201 informar que é no andar de cima
// se for qualquer outro valor informar "Sala Invalida"
// igualdade (== ou ===)
const sala = prompt("Qual sala? ")
if(sala === "101"){
    console.log("É no andar de baixo");
} else if(sala === "201"){
    console.log("É no andar de cima");
}else{
    console.log("Sala Invalida");
}