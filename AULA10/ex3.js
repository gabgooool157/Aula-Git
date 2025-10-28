var prompt = require('prompt-sync')();

const dig1 = +prompt('Digite um valor: ')
const dig2 = +prompt('Digite outro valor: ')
const dig3 = +prompt('Digite o último valor: ')
function val(n1,n2,n3) {
    if(n1 >= n2 && n1 >= n3){
        return n1
 }else if(n2 >= n1 && n2 >= n3){
    return n2
 }else{
    return n3
 }

}
console.log(val(dig1,dig2,dig3));

console.log('======'.repeat(39)); //ou use Match.max para retornar direto o valor maior !!!

function val2(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(val2(10,3000,33));

