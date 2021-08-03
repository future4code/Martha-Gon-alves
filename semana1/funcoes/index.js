/* interpretação de código 

1 - RESPOSTA:

        A console 1 - 10
          console 2 - 50
        
        B - a função seria realizada mas não seria impressa no console. log, logo, não iria aparecer nada!

2 - RESPOSTA:

        A - A funçao pegara a frase enviada pelo o usuario no prompt e retornara 
            toda e qualquer palavra ou letra que possa estar em maiusculo da frase 
            em minusculo, e também ira dizer se nessas frases contem a palavra 'cenoura'. 
            Lembrando que o includes procura literalmente a palavra solicitada = se ele 
            esta procurando uma palavra que nao esteja no plural e na frase contenha a 
            palavra no plural ele nao ira reconhecer. Assim como a resposta iii da questao B
       
        B -
            i. console 1 - eu gosto de cenoura true
            ii. console 2 - cenoura é bom para a vista true
            iii. console 3 - cenouras crescem na terra false 
*/

//Escrita de código

//1 RESPOSTA:
    //A
        const infosSobreMim = () => {
            console.log('Eu sou Martha, tenho 22 anos, moro no Rio de janeiro e sou estudante.')
        }

        infosSobreMim()

    //B
        const infosSobreMim2 = (nome, idade, endereco, profissão ) => {
            const unindoAsInfos = `Meu nome é ${nome}, tenho ${idade} anos de idade, eu moro no ${endereco} e sou ${profissão}`
            return unindoAsInfos
        }

        const infosPFormarFrase = infosSobreMim2('Martha', 22,'Rio de Janeiro','estudante',)
        console.log(infosPFormarFrase)


//2 RESPOSTA:
    //A
        const numeros = (numero1, numero2) =>{
            const somaResultado = numero1 + numero2
            return somaResultado
        }

        const enviandoNumeros = numeros(2,3)
        console.log(enviandoNumeros)
    
    //B
        const maiorQue = (numero3, numero4) =>{
            const comparacaoMaiorque = numero3 >= numero4
            return comparacaoMaiorque
        }

        const enviandoNumeros2 = maiorQue(2,3)
        console.log(enviandoNumeros2)

    //C
        const divisivel = (numero5, numero6) =>{
            const comparacaoDivisivel = numero6 % numero5 === 0
            return comparacaoDivisivel
        }

        const enviandoNumeros3 = divisivel(2,3)
        console.log(enviandoNumeros3)

    //D
        const frase = (frase1) =>{
            const modificandoFrase = frase1.toUpperCase()
            const tamanhoDafrase = frase1.length
            const resposta = `frase modificada: ${modificandoFrase}, tamanho da frase: ${tamanhoDafrase}`
            return resposta
        }

        const enviandoFrase = frase('porco aranha')
        console.log(enviandoFrase)


//3 RESPOSTA:

const soma = (num1, num2) => {
    const somando = num1 + num2
    return somando
}

const enviandoNum = soma(30, 3)
console.log(enviandoNum)

const diferenca = (num3, num4) => {
    const subtracao = num3 - num4
    return subtracao
}

const enviandoNum2 = diferenca(30,3)
console.log(enviandoNum2)

const multiplicacao = (num5, num6) => {
      const multiplicando = num5 * num6
      return multiplicando
}

const enviandoNum3 = multiplicacao(30, 3)
console.log(enviandoNum3)

const divisao = (num7, num8) => {
        const dividindo = num7 / num8
        return dividindo
}

const enviandoNum4 = divisao(30, 3)
console.log(enviandoNum4)



//DESAFIO:

//1 - RESPOSTA: RESOLUÇÃO PROFESSORA AMANADA

const funcao1 = (parametro) => {
    console.log(parametro)
}

const funcao2 = (parametro2, parametro3) => {
    const somaDaFuncao2 = parametro2 + parametro3
    funcao1(somaDaFuncao2)
     
 }
 
  funcao2(2, 3)

//2 - RESPOSTA: RESOLUÇÃO PROFESSORA AMANADA

function calculaHipotenusa(b, c) {
	const hipotenusaAoQuadrado = b ** 2 + c ** 2
	const hipotenusa = hipotenusaAoQuadrado ** (1/2)
	return hipotenusa
}

const resultadoHipotenusa = calculaHipotenusa(2, 2)
console.log('Hipotenusa: ', resultadoHipotenusa)







