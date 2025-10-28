var prompt = require('prompt-sync')();
const val = +prompt('Digite o valor: ');
const cot = +prompt('Agora digite a cotação: ')
const calc = cot / val
if(cot <= 0){
    console.log('Cotação Inválida');
    
}else{
    console.log(calc);
    
}