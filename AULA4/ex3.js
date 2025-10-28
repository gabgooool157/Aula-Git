var prompt = require('prompt-sync')();
const temp = +prompt('Digite uma temperatura: ')
const n1 = (temp - 32) * 5/ 9;
if(temp > 1000 || temp < -1000){
    console.log('Valor irreal');
    
}else{
    console.log(n1);
    
}
