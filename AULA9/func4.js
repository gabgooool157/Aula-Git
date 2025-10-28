var prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome: ");
let hora = +prompt("Digite a hora atual (0 a 23): ");

function gerarMensagem(nome,hora) {
    if(hora < 12){
        return `Bom dia, ${nome}`
    }else if(hora >= 12 && hora <= 18){
        return`Boa tarde, ${nome}`
    }else{
        return`Boa noite, ${nome}`
    }
    
}
console.log(gerarMensagem(nome, hora));
