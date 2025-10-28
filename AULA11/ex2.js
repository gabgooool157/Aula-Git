let cachorro = {
    nome: 'Tantan',
    idade: 10,
    cor: 'Preto',
    item: 'Laço',
    temFome: true,
    validarFelicidade: function () {
       if(this.temFome === false){
        return 'O cachorro está alegre :)'
       }else{
        return 'O cachorro está depressivo :('
       }
    },
    validarIdade: function () {
        if(this.idade > 10){
            return `${this.nome} é velho`
        }else{
            return `${this.nome} é novo`
        }
    },
    aumentarIdade: function () {
        return this.idade++
    }
}

console.log(cachorro.validarFelicidade());
console.log(cachorro.validarIdade());
console.log(cachorro);
console.log(cachorro.validarIdade());
cachorro.aumentarIdade()
cachorro.aumentarIdade()
console.log(cachorro.validarIdade());




