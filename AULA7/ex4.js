let coisas = ['sim', 'nao', 23, 'mesa', 9]
for(let i = 0; i < coisas.length; i++){
    console.log(coisas[i]);
    
}
//
var prompt = require('prompt-sync')();
let itens = []
let item 
while (true) {
    item = prompt('Digite um item ou fim para parar:')
    if(item == 'fim'){
        break
    }else{
        itens.push(item)
    }
    console.log(`Item: ${item}`);
    console.log(`Itens: ${itens}`);
    

}


