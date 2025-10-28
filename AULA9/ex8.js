const numeroTabuada = 7
let contagemPares = 0

for(let i = 1; i <= 10; i++){
    const resultado = numeroTabuada + 1
    if (resultado % 2 == 0) {
        contagemPares++;
    }
    }
    console.log(`Numero da tabuada ${numeroTabuada}`)
    console.log(`Total de resultados pares: ${contagemPares}`)