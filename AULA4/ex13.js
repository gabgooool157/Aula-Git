var prompt = require('prompt-sync')();
const n1 = +prompt('Digite sua nota: ')
const n2 = +prompt('Segunda nota: ')
const n3 = +prompt('Terceira nota: ')
const calc = (n1 + n2 + n3) / 3
console.log(calc);

if(calc < 5){
    console.log('Reprovado');
    
}else if(calc <= 5){
    console.log('Recuperação');
    
}else if (calc <= 7){
    console.log('Aprovado');
    
}else{
    console.log('Aprovado');
    
}