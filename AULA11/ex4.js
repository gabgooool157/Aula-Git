var prompt = require('prompt-sync')();

const telefone = {
    numero: 2121211212,
    credito: 10,
    trocarNumero: function (numeroTelefone) {
        this.numero = numeroTelefone

    },
    tocar : function () {
        return 'Trim Trim !'
    },
    ligar: function (tel) {
        if(this.credito > 0){
            this.credito--
            return `Ligando para ${tel}`
        }else{
            return `Sem crédito !!`
        }
    }
}
console.log(telefone);

let trocar = +prompt('Digite se novo número: ')
telefone.trocarNumero(trocar)
console.log(telefone);
console.log(telefone.tocar());
console.log(telefone.ligar('5342421799'));
console.log(telefone.credito);



