export function somar(a,b){
    return `A Soma é: ${a + b} `
}
export function subtrair(a,b){
    return `A Subtração é ${a - b}`
}
export function multiplicar(a,b){
    return `A Multiplicação é: ${a * b}`
}
export function dividir(a,b){
    if(b == 0){
        return `Operação Incorreta: Divisão por Zero!!`
    }else{
        return `A Divisão é: ${a / b}`
    }
}
