var prompt = require('prompt-sync')();
const ano = +prompt('Ano:')
for(let i =ano ; i<=2025; i++){
    console.log(i) 
    console.log(i - ano);
    
}