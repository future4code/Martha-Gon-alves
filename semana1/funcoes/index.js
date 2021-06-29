//Exercicios de interpretação de codigo --------------------------------------
//EXERCÍCIO 1-------------------------------------

/* 

RESPOSTAS

a) será impressão o número 10  no primeiro console e o número 50 no segundo 
console.

b) a função seria executada da mesma forma. Retornando numero 10 e 50 como 
resultado da multiplicação!

//EXERCÍCIO 2-------------------------------------


a)  Nesse caso aqui a função está modificando a resposta do usuário e ele vai 
    colocar toda as apalavras maiusculas em minusculas para ai sim verificar se 
    nas frases existe a palavra que esta no includes, logo, ele retornara true 
    or false.

b) 
i -     true
ii -    true
iii -   false

*/

//Exercicios de interpretação de codigo --------------------------------------
//EXERCÍCIO 1-------------------------------------

//Respostas

//a)--------------------------------------------
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
   
   //EXERCÍCIO 2-------------------------------------
   
   //Respostas
   //a)--------------------------------------------
   const doisNumeros = function (numero1, numero2){
       const soma = numero1 + numero2
       return soma
   }
   
   const resultado = doisNumeros(4, 8)
   
   console.log("Resultado da Soma: ", resultado)
   
   
   //b)--------------------------------------------
   const qualEONumeroMaior = function (num1, num2){
       return num1 >= num2
   }
   
   const resultado2 = qualEONumeroMaior(8, 4)
   
   console.log("Resultado da comparação: ", resultado2)
   
   
   //c)--------------------------------------------
   
   
   const numeroPar = function (n1){
       return n1 % 2 === 0
   
   }
   
   const resultado3 = numeroPar(8)
   
   console.log("Resultado da comparação; numero é par ou impar? ", resultado3)
   
   
   //d)--------------------------------------------
   const funcaoDaMensagenm = function(umaMensagem) {
     return umaMensagem.toLowerCase()
   }
   
   const olhaAMesangem = funcaoDaMensagenm('UMA VEZ FLAMENGO')
   
   console.log(`Essa é a mensagem em caixa baixa; ${olhaAMesangem}. Esse é o tamanho da mensagem; ${olhaAMesangem.length}!`) 
   
   
   //EXERCÍCIO 3-------------------------------------
   
   //Respostas
   
   // const numero1 = function(numUsuario1, numUsuario2) {
   //     return numUsuario1 + numUsuario2
   // }
   
   
   // const numero2 = function(numUsuario1, numUsuario2) {
   //     return numUsuario1 - numUsuario2
   // }
   
   // const numero3 = function(numUsuario1, numUsuario2) {
   //     return numUsuario1 * numUsuario2
   // }
   
   // const numero4 = function(numUsuario1, numUsuario2) {
   //     const respostaDivisao = numUsuario1 / numUsuario2
   //     return  respostaDivisao
   // }
   
   // const numUsuario1 = Number (prompt("Escolha um numero!"))
   // const numUsuario2 = Number (prompt("Escolha outro numero!"))
   
   // const respostaSoma = numero1(numUsuario1, numUsuario2)
   // const respostaSubtracao = numero2(numUsuario1, numUsuario2)
   // const respostaMultiplicacao = numero3(numUsuario1, numUsuario2)
   // const respostaDivisao = numero4(numUsuario1, numUsuario2)
   
   // console.log("Números inseridos: ", numUsuario1, numUsuario2)
   // console.log("Soma: ", respostaSoma )
   // console.log("Subtração: ", respostaSubtracao)
   // console.log("Multiplicação: ", respostaMultiplicacao)
   // console.log("Divisão: ", respostaDivisao)
   
   //DESAFIO --------------------------------------------------
   
   //DESAFIO 1--------------------------------------------------
   //RESPOSTA
   
   //a)--------------------
   const functionAleatorio = (aleatorio2) => {
       return aleatorio2
   }
   
   const aleatorio = functionAleatorio('BATATA QUENTE!')
   console.log(aleatorio)

   //b)------------------
   
   const numerosAleatorios = (aleatorio2, aleatorio3) => {
       console.log(`resultado da soma de números aleatorios ${aleatorio2 + aleatorio3} '-'`)
   }
   
   const uniãoDeNumerosAleatorios = numerosAleatorios(100, 1)
   const aleatorio2 = functionAleatorio(numerosAleatorios)
   
   