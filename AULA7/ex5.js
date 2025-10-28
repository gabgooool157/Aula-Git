var prompt = require('prompt-sync')();
let array = []
let elemento
for(let i = 0; i < 10; i++){
    elemento = prompt('Digite alguma coisa:')
    array.push(elemento)
    console.log(array);
    
}
