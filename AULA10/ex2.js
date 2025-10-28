var prompt = require('prompt-sync')();


const dig = +prompt('Digite um número para verificar se é positivo ou negativo: ')
function verif(n1) {
    if(n1 < 0){
        return `O número ${n1} é NEGATIVO`
    }else{
       return `O número ${n1} é POSITIVO`
    }
}
console.log(verif(dig));

