var prompt = require('prompt-sync')();
// Se o valor da compra for maior que 100 reais ou
// o usuario possuir um cupom de desconto,
// Mostrar "Tem desconto"
const valor = +prompt("Qual o valor da sua compra ? ")
const cupom = prompt("Tens um cupom ??(s ou n): ")
if(valor >= 100 || cupom == "s"){
    console.log("Tem desconto!");
}else{
    console.log("Não tem desconto!");
}