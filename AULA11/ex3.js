const lampada = {
    Estaligada: false,
    ligar: function () {
       if(this.Estaligada === true){
        return this.Estaligada = true
       }else{
        return 'Já está ligada'
       }
    },
    desligar: function () {
        if(this.Estaligada === true){
            return this.Estaligada = false
        }else{
            return 'Já está desligada'
        }
    }
}
console.log(lampada);
console.log('=== Função Ligar');
console.log(lampada.ligar());
console.log(lampada)
console.log('===Função Desligar');
console.log(lampada.desligar());
console.log(lampada);




