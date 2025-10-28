var prompt = require('prompt-sync')();
const numero = +prompt('Digite: ')
const n = numero * 3600
if(numero < 0){
    console.log('Erro');
    
}else{

    console.log(n);
    
}