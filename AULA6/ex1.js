var prompt = require('prompt-sync')();

const n1 = +prompt('Escolha um número: ')
const n2 = +prompt('Escolha um número: ')
let escolha
while (true) {
    escolha = prompt('Escolha entre + - * /:')
    if(escolha == "+"){
        console.log(n1 + n2);
        continue

    }else if(escolha == "-"){
        console.log(n1 - n2);
        continue

    }else if(escolha == "/"){
        if(n2 == 0){
            console.log('Não é possível dividir por 0');
            break
        }
        console.log(n1 / n2);
        continue

    }else if(escolha == "*"){
        console.log(n1 * n2);
        continue

    }else{
        console.log('Operação incorreta');
        break
    }
    
}
