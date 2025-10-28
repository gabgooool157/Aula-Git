var prompt = require('prompt-sync')();

let soma = 0
for(let i = 1; i <= 50; i++){
    console.log(`i: ${i}`);
    soma = soma + i
    console.log(`Soma: ${soma}`);
    
}
