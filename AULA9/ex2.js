var prompt = require('prompt-sync')();

let n = +prompt("Insira um número: ")
for(let i = 0; i < n ; i++){
    console.log(`Olá, ${i+1}`)
}