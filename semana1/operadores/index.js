//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO--------------------------------------
//EXERCÍCIO 1----------------------------------------------------------

/*
Resposta:

console 1 - a. false
console 2 - b. false
console 3 - c. true
console 4 - d. boolean

//EXERCÍCIO 2--------------------------------------------------------

Resposta:
    Nesse programa o objetivo é atraves do prompt receber 2 numeros,somar o dois dentro de outra variavel 
e imprimir o resultado da soma!
    Todo prompt retorna uma string entao para que o prompt retorne numero, devemos fazer uma conversão
usando Number() 

O QUE O CONSOLE IRA IMPIRMIR = 11
O OBJETIVO DO MEU COLEGA = 1+1 = 2

//EXERCÍCIO 3--------------------------------------------------------

Respota:
 RESOLUÇÃO DO PROBLEMA
    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
*/
//EXERCÍCIO DE ESCRITA DE CÓDIGO------------------------------------------------
//EXERCÍCIO 1---------------------------------------------------------------

//RESPOSTA:

const idadeUsuario = Number (prompt("Qual é a sua idade?"))
const idadeMelhorAmiga = Number (prompt("Qual é a idade da sua melhor amiga?"))

const comparandoAsIdades = idadeUsuario === idadeMelhorAmiga

console.log("Sua idade é maior do que a da sua melhor amiga?", comparandoAsIdades)

const diferencaDeIdade = idadeMelhorAmiga - idadeUsuario

console.log("Eu e minha melhor amiga temos", diferencaDeIdade, "de diferença de idade!")

//EXERCÍCIO 2---------------------------------------------------------------

//RESPOSTA:

const numeroPar = Number (prompt("Insira um  numero par!"))

console.log(numeroPar / 2 )

/*

PRIMEIRO COMENTÁRIO: Estamos fazendo a divisão DE números pares COM números pares, logo, o padrao dessa questao 
é que a divisao sempre ira nos retornar nūmeros inteiros, sem restos. 

SEGUNDO COMENTÁRIO: A divisão sempre ira me retornar um numero, ainda que seja um número quebrado, 
um nūmero que não é inteiro, o resto de uma divisão.

*/

//EXERCÍCIO 3---------------------------------------------------------------

//RESPOSTA:

const anosDeIdade  = Number (prompt("Insira aqui quantos anos de vida voce tem?"))

console.log("-) A idade do usuário em anos", anosDeIdade)
console.log("a) A idade do usuário em meses", anosDeIdade * 12)
console.log("b) A idade do usuário em dias", anosDeIdade * 365)
console.log("c) A idade do usuário em horas", anosDeIdade * 8760)

//EXERCÍCIO 4---------------------------------------------------------------

//RESPOSTA:

const numero1 = Number (prompt("Digite um numero"))
const  numero2 = Number (prompt("Digite outro numero"))

const comparandoNumeros0 = numero1 > numero2
const comparandoNumeros1 = numero1 === numero2
const comparandoNumeros2 = numero1 % numero2 === 0
const comparandoNumeros3 = numero2 % numero1 !== 0



console.log("O primeiro numero é maior que o segundo?", comparandoNumeros0 )        //true
console.log("O primeiro numero é igual ao segundo?", comparandoNumeros1 )           //false
console.log("O primeiro numero é divisível pelo segundo?",  comparandoNumeros2   )  //true
console.log("O segundo numero é divisível pelo primeiro?",  comparandoNumeros3 )    //true


//DESAFIO---------------------------------------------------------------
//DESAFIO 1-------------------------------------------------------

//RESPOSTA:

const kelvin = (77 - 32)*(5/9) + 273.15
console.log(kelvin)

const fahrenheit = (80)*(9/5) + 32
console.log(fahrenheit)

const fahrenheitKelvin = (30)*(9/5) + 32
const kelvinFahrenheit = (30 - 32)*(5/9) + 273.15
console.log("Fahrenheit: ", fahrenheitKelvin, "Kelvin: ", kelvinFahrenheit)

const celsiusUsuario = Number(prompt("Digite alguma temperatura em celsius? Apenas o numero!"))
const fahrenheitKelvin2 = (celsiusUsuario)*(9/5) + 32
const kelvinFahrenheit2 = (celsiusUsuario - 32)*(5/9) + 273.15
console.log("Fahrenheit: ", fahrenheitKelvin2, "Kelvin: ", kelvinFahrenheit2)

//DESAFIO 1-------------------------------------------------------

//RESPOSTA:

const quilowattHora = Number(prompt("Digite o quilowatt-hora gasto esse mês em sua residência?"))
console.log("Esta familia consome: ", quilowattHora, "quilowatt-hora")

//DESAFIO 2-------------------------------------------------------

//RESPOSTA:

const quilowattHora280 = 280 * 0.05
const valorAPagar = quilowattHora280
const descontoNoPagamento = (quilowattHora280 * 15) / 100
console.log(valorAPagar)
console.log(descontoNoPagamento)

//DESAFIO 3-------------------------------------------------------

//RESPOSTA:

//a)
const libras = 20
const librasViraKilo = libras * 0.454
console.log(librasViraKilo)

//b)
const oz = 10.5
const ozViraKilo = oz * 0.29767
console.log(ozViraKilo)

//c)
const milha = 100
const milhaViraMetro = milha * 1609.34
console.log(milhaViraMetro)

//d)
const pes = 50
const pesViraMetro = pes * 0.305
console.log(pesViraMetro)

//e)
const gal = 103.56
const galViraLitro = gal * 3.785
console.log(galViraLitro)

//f)
 const xicara = 450
 const xicaraViraLitro = xicara * 0.15
 console.log(xicaraViraLitro)

 //g)
const librasUsuario = Number(prompt("Digite um número!"))
const librasUsuarioViraKilo = librasUsuario * 0.454
console.log(librasViraKilo)

//TODAS AS TAREFAS FORAM REALIZADAS 

