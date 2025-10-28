var prompt = require('prompt-sync')();
const temp = +prompt('Digite a temperatura ambiente: ')
if(temp < 10){
    console.log('Muito frio')
    
}else if(temp <= 25){
    console.log('Cima agradavel');
    
}else{
    console.log('Muito calor');
    
}
