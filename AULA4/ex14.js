var prompt = require('prompt-sync')();

const voltagem = +prompt('Informe a voltagem (em Volts): ');
const frequencia = +prompt('Informe a frequência (em Hertz): ')
if ((voltagem === 127 || voltagem === 220) && frequencia === 60) {
    console.log("Equipamento operando em condições seguras.");
} else {
    console.log("Alerta: Valores fora do padrão de operação!");
}
