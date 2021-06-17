//Exercicios de interpretação de codigo --------------------------------------
//Número 1 -------------------------------------------------------------------

/* RESPOSTAS
a) será impressão o número 10  no primeiro console e o número 50 no segundo console.

b) iria aparecer somente o número 2 e o número 10.

//Número 2 ------------------------------------------------------

a) Nesse caso aqui a função está modificando a resposta do usuário e ele vai retornar a resposta do usuário já modificada no console.log(). A função vai deixar a palavra cenoura maiúscula.

b) 
i - eu gosto de CENOURA
ii - CENOURA é bom pra vista
iii - cenouras crescem na terra

*/

//Exercicios de interpretação de codigo --------------------------------------
//Número 1 -------------------------------------------------------------------

//Respostas
//a)
const informaçõesSobreMim =  function (){
 console.log(" Hello Wolrd! Eu sou Martha, tenho 21 anos, moro no rio de janeiro e sou estudante da labenu")

}

informaçõesSobreMim()

//b)--------------------------------------------

const nome = "Martha"
const idade = 21
const endereço = "Rio de janeiro, freguesia"
const profissão = "estudante" 


const informaçõesSobreMim2 = function (nome, idade, endereço, profissão){
 
}


informaçõesSobreMim2(nome)
informaçõesSobreMim2(idade)
informaçõesSobreMim2(endereço)
informaçõesSobreMim2(profissão)

console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereço}, ${profissão}`)

//Número 2 -------------------------------------------------------------------

//Respostas
//a)

const doisNumeros = function (numero1, numero2){
    const soma = numero1 + numero2
    return soma
}

const resultado = doisNumeros(4, 8)

console.log("Resultado da Soma: ", resultado)

//b)--------------------------------------------

const qualEONumeroMaior = function (num1, num2){
    const comparacao = num1 > num2
    return comparacao
}

const resultado2 = qualEONumeroMaior(8, 4)

console.log("Resultado da comparação: ", resultado2)

//c)--------------------------------------------

const aviso = ("Se o numero for par ele divira o numera igualmente por 2.")
 console.log(aviso)

 const n1 = 8

const numeroPar = function (n1){
    const comparacaoTrueOrFalse = n1 % 2 === 0
    return comparacaoTrueOrFalse
}

const resultado3 = numeroPar(n1)

console.log("Resultado da comparação; numero par ou impar? ", resultado3)


//d)--------------------------------------------

const umaMensagem = "UMA VEZ FLAMENGO!"

const funcaoDaMensagenm = function(umaMensagem) {
  const umaNovaMensagem= umaMensagem.toLowerCase()
   return umaNovaMensagem
}

const olhaAMesangem = funcaoDaMensagenm(umaMensagem)

console.log( olhaAMesangem, olhaAMesangem.length) 


//Número 3 -------------------------------------------------------------------



const numero1 = function(numUsuario1, numUsuario2) {
    return numUsuario1 + numUsuario2
}


const numero2 = function(numUsuario1, numUsuario2) {
    return numUsuario1 - numUsuario2
}

const numero3 = function(numUsuario1, numUsuario2) {
    return numUsuario1 * numUsuario2
}

const numero4 = function(numUsuario1, numUsuario2) {
    const respostaDivisao = numUsuario1 / numUsuario2
    return  respostaDivisao
}

const numUsuario1 = Number (prompt("Escolha um numero!"))
const numUsuario2 = Number (prompt("Escolha outro numero!"))

const respostaSoma = numero1(numUsuario1, numUsuario2)
const respostaSubtracao = numero2(numUsuario1, numUsuario2)
const respostaMultiplicacao = numero3(numUsuario1, numUsuario2)
const respostaDivisao = numero4(numUsuario1, numUsuario2)

console.log("Números inseridos: ", numUsuario1, numUsuario2)
console.log("Soma: ", respostaSoma )
console.log("Subtração: ", respostaSubtracao)
console.log("Multiplicação: ", respostaMultiplicacao)
console.log("Divisão: ", respostaDivisao)

//DESAFIO --------------------------------------------------