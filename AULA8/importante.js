var prompt = require('prompt-sync')();

console.log('Math.ceil', Math.ceil(2.4));

console.log('Math.floor', Math.floor(2.3));

console.log('Math.round', Math.round(2.5));
console.log('Math.round', Math.round(2.4));

console.log('Math.pow', Math.pow(3,3));
console.log('Math.pow', 3**3);


console.log('Math.sqr', Math.sqrt(25));
// 
const v = 10/3
console.log(`Valor, ${v.toFixed(2)}`);

const cor = prompt('Digite uma cor: ').toLocaleLowerCase()
if(cor == 'azul'){
    console.log('Azul!');
    
}else{
    console.log('Erro');
    
}

