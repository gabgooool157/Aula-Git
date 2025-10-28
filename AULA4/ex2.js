var prompt = require('prompt-sync')();
const alt = +prompt('Digite a altura: ')
const larg = +prompt('Digite a largura: ')
if(alt <= 0 || larg <= 0){
    console.log('Os valores devem ser positivos.');
    
}else{
    console.log('Ok');
    
}