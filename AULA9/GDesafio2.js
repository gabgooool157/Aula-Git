var prompt = require('prompt-sync')();

let frutas = 50;
while (frutas > 0) {
console.log(`Frutas restantes: ${frutas}`);
let comeu = Number(prompt("Quantas frutas você comeu? "));
frutas -= comeu;
if (frutas < 0) {
frutas = 0;
}
}
console.log("Você comeu todas as frutas! 🍎🍌🍇");
console.log("----------------------------");
