let numero
let soma = 0


while (numero !== 0 ){
        numero = Number(prompt('digite um numero'))
        soma += numero
}

console.log(soma)


const restornaMaiorNumero = (arrayDeNumero) => {
            let maiorNumero = 0
            const tamanho = arrayDeNumero.length
            for(let i = 0; i < tamanho; i++){
                const nuemroAtual = arrayDeNumero[i]
                if(nuemroAtual > maiorNumero){
                        maiorNumero = nuemroAtual
                }
            }
            return maiorNumero
}

