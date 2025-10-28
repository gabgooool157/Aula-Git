var prompt = require('prompt-sync')();

let soma = 0
for(let i =0 ; i<=200; i++){
    if (i % 2 == 0) {
        soma += i
    }
} 
console.log(`Soma : ${soma}`);

