var prompt = require('prompt-sync')();
const idade = +prompt('Qual sua idade? ')
const auto = prompt('Possui autorização?(Sim ou Nao): ')
if(idade >= 18 || auto === 'Sim' ){
    console.log('Acesso permitido');
    
}else{
    console.log('Não tem acesso');
    
}
