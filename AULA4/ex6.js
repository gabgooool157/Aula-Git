var prompt = require('prompt-sync')();
const jant = +prompt('Qual valor total do jantar? ')
const aten = prompt('Atendiemnto foi bom ou ruim ? ')
let calc = 0
let gorjeta = 0;


if(aten === 'bom'){
    gorjeta = jant * 0.10;
    console.log(jant + gorjeta);
}else{
    console.log('Sinto muito');
    
}



