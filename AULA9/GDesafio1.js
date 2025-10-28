var prompt = require('prompt-sync')();

let total2 = 0;
while (total2 <= 100) {
let valor = Number(prompt("Quanto você quer adicionar à economia?"));
total2 += valor;
console.log(`Total economizado até agora: R$
${total2.toFixed(2)}`);
}
console.log("Parabéns! Você já pode fazer sua compra!");
console.log("----------------------------");