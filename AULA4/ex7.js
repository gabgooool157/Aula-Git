var prompt = require('prompt-sync')();
const n1 = +prompt('Digite sua nota: ')
const n2 = +prompt('Segunda nota: ')
const calc = n1 + n2
if(calc >= 9){
    console.log('Execelente');
    
}else if(calc >= 6){
    console.log('Aprovado');
    
}else{
    console.log('Reprovado');
    
}
