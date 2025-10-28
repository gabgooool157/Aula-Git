var prompt = require('prompt-sync')();
const nivelAcesso = prompt('Digite qual seu nome de Acesso: ')
if(nivelAcesso != 'Gerente'){
    console.log('Acesso Negado');
    
}else{
    console.log('Olá Gerente,seja bem-vindo');
    
}
