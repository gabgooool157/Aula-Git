var prompt = require('prompt-sync')();

let soma = 0
for(let i = 10; i <= 100; i+= 5){
    console.log(`i: ${i}`);
    soma = soma + i
    console.log(`Soma: ${soma}`);
    
}
