function calcIMC(peso,altura){
    return (peso / (altura*altura)).toFixed(2)
}

function classIMC(imc) {
    if(imc < 18.5){
        return 'Abaixo do peso'
}else if(imc < 25){
    return 'Peso normal'
}else if(imc < 30){
    return 'Sobrepeso'
}else{
    return 'Obesidade'

}
}
const n1 = +(calcIMC(100,1.50));
console.log(classIMC(n1));
console.log(n1);