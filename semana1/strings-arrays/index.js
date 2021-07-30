/*INTEREPRETAÇÃO DE CÓDIGO

1 RESPOSTA: O console ira mostrar

a - undefined 
b - null
c - 11 (o array tem 8 itens)
d - 3 (ele esta mostrando o item que esta no indice 0 do array)
e - [3, 19, ....] (a segunda posição array era o 4 e agora passou a ser o 19)
f - 9 (a variavel valor tinha como valor atribuido o indice 6 do array, no console foi impresso o valor)

---------------------

2 RESPOSTA: O console ira mostrar

frase em maiusculo - SUBI NUM ÔNIBUS EM MIRROCOS 
tamanho da string incluindo os espaços - 26

*/

//ESCRITA DE CÓDIGO

//1 - RESPOSTA

const nomeUsuario = prompt('Qual é o seu nome?')
const emailUsuario = prompt('Qual é o seu email?')
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeUsuario}`)

//2 - RESPOSTA
const arrayDeComidinhas = ['camarão','strogonoff de frango','strogonoff de camarão','churrasco','purê de abobora com carne moida',]

console.log(arrayDeComidinhas)
console.log(`modo1: Essas são as minhas comidas preferidas ${arrayDeComidinhas}`)
console.log(`modo2: Essas são as minhas comidas preferidas`)
console.log(`modo2: ${arrayDeComidinhas[0]}`)
console.log(`modo2: ${arrayDeComidinhas[1]}`)
console.log(`modo2: ${arrayDeComidinhas[2]}`)
console.log(`modo2: ${arrayDeComidinhas[3]}`)
console.log(`modo2: ${arrayDeComidinhas[4]}`)

const usuarioComidinha =  prompt('Qual é a sua comida favorita?')
arrayDeComidinhas[1] = usuarioComidinha

console.log(`inserindo a comida do usuario ${arrayDeComidinhas}`)

//3 - RESPOSTA

let listaDeTarefas

const pergunta1 = prompt('tarefa 1')
const pergunta2 = prompt('tarefa 2')
const pergunta3 = prompt('tarefa 3')

listaDeTarefas = [pergunta1, pergunta2, pergunta3]

const numeroUsuario = prompt('digite um numero de 1 a 3')
const numeroConversao = Number(numeroUsuario -1)

listaDeTarefas.splice(numeroConversao,1)
console.log(listaDeTarefas)



//DESAFIO 

//1 - RESPOSTA
 //Resolução da professora chijo
const minhaFrase = "Eu amo Javascript!"
const minhaFraseArray = minhaFrase.split(" ")
console.log(minhaFraseArray)


//2 - RESPOSTA

const arrayDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

//Resolução da professora chijo
const indexAbabaxi = arrayDeFrutas.indexOf("Abacaxi");
const tamanhoArray = arrayDeFrutas.length;

console.log(`Index abacaxi: ${indexAbabaxi}, tamanho do array: ${tamanhoArray}`);






