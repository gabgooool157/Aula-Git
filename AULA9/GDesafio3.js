var prompt = require('prompt-sync')();

let somaNotas = 0;
let quantidade = 0;
while (true) {
let nota = Number(
prompt("Digite uma nota (ou valor negativo para encerrar): "));
if (nota < 0) {
break;
}
somaNotas += nota;
quantidade++;
}
if (quantidade > 0) {
let media = somaNotas / quantidade;
console.log(`Média das notas: ${media.toFixed(2)}`);
} else {
console.log("Nenhuma nota foi inserida.");
}
