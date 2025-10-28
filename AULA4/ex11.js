var prompt = require('prompt-sync')();
const valor = +prompt('Digite o total da compra: ')
const perg = prompt('Você é VIP? ')
const calc = valor * 0.15
const calc1 = valor * 0.05
if(perg === 'Sim' && valor <= 500){
    console.log(valor - calc);
    
}else if(perg === 'Sim' && valor < 500 ){
    console.log(valor - calc1);
    
}else{
    console.log(valor);
    
}