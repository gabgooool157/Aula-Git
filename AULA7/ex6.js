let array = [1,2,13,49,50]
let nomes = ['Gabriel', 'Lobato', 'Horner', 'Arthur', 'Bernardo', 'Quineper']

console.log(`array.length: ${array.length}`);

console.log(`array.sort: ${nomes.sort()}`);

console.log(`array.reverse: ${array.reverse()}`);

console.log(`array.indexOf: ${nomes.indexOf('Arthur')}`);

console.log(`array.includes: ${nomes.includes('Lobato')}`);

const filtro = array.filter(elemento => elemento > 10)
console.log(filtro);

