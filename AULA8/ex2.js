var prompt = require('prompt-sync')();
function somar(n1,n2,n3,n4) {
    return n1 + n2 + n3 + n4
}
console.log(somar(5,5,5,5));
//
function verif(n1) {
    if (n1 % 2 === 0){
        return `O ${n1} é par`
    }else{
        return `O ${n1} é ímpar`
    }
}
console.log(verif(4));



