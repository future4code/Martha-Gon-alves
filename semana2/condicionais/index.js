//EXERCICIO DE INTERPRETAÇÃO DE CODIGO ------------------>
//EXERCICIO 01--------------->

/* 
a)
Resposta:

Criamos uma variabel em que o valor sera o numero digitado pelo usuario.
Depois disso criamos uma condição em que avaliamos se o numero digitado
pelo usuario é divisivel por dois, sem que reste nada. Caso o numero atenda
a condição imposta ele retornara uma resposta possitiva do contrario uma espota negativa!

resposta positiva - "Passou no teste."
resposta negativa - "Não passou no teste."
--------------------------
b)
Resposta:

Digitando um numero que igualmente/inteiramente pode ser divisivel por dois 
e que divido por dois resta 0, tipo o numero 2 mesmo (numeros pares)
--------------------------
c)
Resposta:

Digitando um numero que nao pode ser igualmente divisivel por dois 
e que divido por 2 nao resta 0, tipo o numero 3 (numeros impares)


//EXERCICIO 02--------------->

a)
Resposta:
Para criar varias partes/blocos e executar cada "case" individualmente, 
de acordo com a condição. Os itens/condiçao disponiveis tem preço proprio
logo no console vai ser impresso o valor que foi dado, caso contrario existe 
um preço padrao que vai aparecer para qualquer item que nao tenha dentro do condiçao.
------------------------
b)
Resposta:
A mensagem impressa sera extamente "O preço da fruta  Maçã  é  R$  2.25"
pois existe um valor dado a essa fruta denr=teo da condição"
------------------------
c)
Resposta:
Acho que a mensagem  seria 5, "O preço da fruta  Maçã  é  R$  5".
se nao for isso nao acontece nada!

//EXERCICIO 03--------------->

a)
Resposta:
 Csso a linha 1 seja "const numero = Number(prompt("Digite o primeiro número."))
 nessa linha estamos criando uma variavel que solicita atravez de um prompt, um numero
 ao usuario. o Number nessa parte do codigo sreve para que a respota do usuaria seja
 retornada como number nao string.

 caso a linha 1 seja "if(numero > 0) {"
 nessa linha estamos criando uma condição para saber se o valor da variavel é maior que 0

b)
Resposta:
 10 -> Esse número passou no teste
 -10 -> Essa mensagem é secreta!!!

c)
Resposta:

eu acho que sim pois eu acho que a forma correta de sintaxe para esse codigo seria:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste") 
} 
else  
{
    console.log("Essa mensagem é secreta!!!")
}

*/

//EXERCICIO DE ESCRITA DE CODIGO ------------------>
//EXERCICIO 01--------------->


const idadeParaDirigir = Number(prompt("Quantos anos você tem?"))

if (idadeParaDirigir >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você nao pode dirigir")
}
    

//EXERCICIO 02--------------->

const qualTurno = prompt("Olá aluno!! Em qual turno você estudo? Digite 'M' para matutino, V para vespertino e N para noturno")


if (qualTurno === "M") {

    console.log("Bom dia Aluno(a)!!!")
} 
else if (qualTurno === "V"){

    console.log("Boa tarde Aluno(a)!!!")

} 
else if (qualTurno === "N") {
    console.log("Boa noite Aluno(a)!!!")
}

//EXERCICIO 03--------------->
const qualTurno2 = prompt("Olá aluno!! Em qual turno você estudo? Digite 'M' para matutino, V para vespertino e N para noturno")

switch (qualTurno2){
    case "M":
        console.log("Bom dia Aluno(a)!!!")
        break;
    case "V":
        console.log("Boa tarde Aluno(a)!!!")
        break;
    case "N":
        console.log("Boa noite Aluno(a)!!!")
        break;
}


//EXERCICIO 04--------------->

let filme = prompt("Qual genero de filme vocês vao assistir?")
let preco = prompt("Qual é o preço do ingresso?")


if (filme === "fantasia" && preco <= 16) {
        console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(");
}

//DESAFIO ----------------->

let filme = "Qual genero de filme vocês vao assistir?"
let preco = "Qual é o preço do ingresso"
let lanchinho = "Qual lanchinho você gostaria de comprar"


if (filme === "fantasia" && preco <= 15) {
        console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(");
}