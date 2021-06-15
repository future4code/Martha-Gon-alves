//------------ InterpretaçãoDeCodigo------------
//------------Exercicio1------------

/*1 - Resposta 

a) false
b) false
c) true
d) boolean
*/

//-----------------Exercicio2--------------

/* O console ira retornar os numeros lado a lado, quase como uma concatenaçao. 
se eu der dois numeros pra ele ele vai me retornar um numero do lado do outro!
EX - com esse codigo: 1 + 1 = 11
EX - com o codigo correto: 1+1 =2 */

//------------------Exercicio3--------------

//para solucionar o problema do amigo eu iria sugerir o seguinte codigo;

//const numero1 = Number (prompt("digite um numero!"))
//const numero2 = Number (prompt("digite um segundo numero!"))

//const soma = numero1 + numero2

//console.log(soma) 

//--------------------ExerciciDeEscritaDeCodigo------------------
//---------------------Exercicio1--------------------------------

const idadeUsuario = Number (prompt("Qual é a sua idade?"))
const idadeMelhorAmiga = Number (prompt("Qual é a idade da sua melhor amiga?"))

const comparandoAsIdades = idadeUsuario === idadeMelhorAmiga

console.log("Sua idade é maior do que a do seu melhor amigo?", comparandoAsIdades)

const diferencaDeIdade = idadeUsuario - idadeMelhorAmiga

console.log("Eu e minha melhor amiga temos", diferencaDeIdade, "de diferença de idade!")
//----------------------Exercicio2-------------------------------

const numeroPar = Number (prompt("Insira um  numero par!"))

console.log(numeroPar / 2 )

/* 
Comentario 1 - o padrao é que o resultado sempre vai ser a metade do numero. 
Estamos dividindo numeros pares por um numero par! 

Comentario 2 - Coloquei o numero 5 e ele me deu a respota 2.5. Ou seja ainda que 
seja um numero impar ele relativamente me trara uma respota que distribua iguamente
o numero para 2, mesmo que quebrando um numero
*/


//----------------------Exercicio3------------------------------
const anosDeIdade  = Number (prompt("Insira aqui quantos anos de vida voce tem?"))

console.log("--) A idade do usuário em anos", anosDeIdade)
console.log("a) A idade do usuário em meses", anosDeIdade * 12)
console.log("b) A idade do usuário em dias", anosDeIdade * 365)
console.log("c) A idade do usuário em horas", anosDeIdade * 8760)

//---------------------Exercicio4----------------------------
const numero1 = Number (prompt("Digite um numero"))
const  numero2 = Number (prompt("Digite outro numero"))

const comparandoNumeros0 = numero1 > numero2
const comparandoNumeros1 = numero1 === numero2
const comparandoNumeros2 = numero1 % numero2 === 0
const comparandoNumeros3 = numero2 % numero1 === 0



console.log("O primeiro numero é maior que o segundo?", comparandoNumeros0 ) //=> true
console.log("O primeiro numero é igual ao segundo?", comparandoNumeros1 ) //=> false
console.log("O primeiro numero é divisível pelo segundo?",  comparandoNumeros2   ) //=> true
console.log("O segundo numero é divisível pelo primeiro?",  comparandoNumeros3 ) //=> true

//NAO CONCLUIDO AINDA, pois 
//---------------------DESAFIO-------------------------------
//NA0 ESTA FEITO