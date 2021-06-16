//------------ExercicioDeInterpretaçao------------------
/* 
NUMERO 1 - RESPOSTAS;

a. undefined - valor nao declarado
b. null - valor passou a ser null
c. 11 - o array tem 11 elementos
d. 3 - o indice zero indica o primeiro elemnto do array que é o numero 3
e. 19 - entrou no lugar do 4
f. 8 - no array o numero 8 é sexto elemento.

NUMERO 2 - RESPOSTA;

SUBI NUM ÔNIBUS EM MIRROCOS? 23

*/

//------------ExercicioDeEscritaDeCodigo------------------

//NUMERO 1 - RESPOSTA;

const nomeUsuario = prompt ("Digite aqui o seu nome!")
const emailUsuario = prompt ("Digite aqui o seu e-mail!")

console.log(`o e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a) ${nomeUsuario}!`)


//NUMERO 2 - RESPOSTAS;
const listaDeComidas = ['peixe', 'camarao', 'purê de abóbora', 'pure de batata',  'carne moída']

 console.log(listaDeComidas)

console.log("Essas são minhas comidas favoritas")
console.log(listaDeComidas [0])
console.log(listaDeComidas [1])
console.log(listaDeComidas [2])
console.log(listaDeComidas [3])
console.log(listaDeComidas [4])


const comidaPreferidaUsuario = prompt ("Qual é a sua comida favorita?")

listaDeComidas.splice(0, 1)

listaDeComidas [1] = comidaPreferidaUsuario

console.log(listaDeComidas)

//NUMERO 3 - RESPOSTAS;

const listaDeTarefas = []

const perguntaAoUsuario = "Responda quais sao as três tarefas que tem para afzer hoje. Responda a seguir!"

alert (perguntaAoUsuario) 

const tarefasUsuario1 = prompt ("tarefa 1")
const tarefasUsuario2 = prompt ("tarefa 2")
const tarefasUsuario3 = prompt ("tarefa 3")

listaDeTarefas [0] = tarefasUsuario1
listaDeTarefas [1] = tarefasUsuario2
listaDeTarefas [2] = tarefasUsuario3

console.log("Essas sao as tres tarefas: ", listaDeTarefas)

const usuarioDigitaIndice = prompt ("Digite aqui o indice de uma tarefa que já realizou!")

listaDeTarefas.splice(2, 1)

console.log("Faltam as seguintes tarefas: ", listaDeTarefas )


//---------------- DESAFIO---------------

//NUMERO 1 - DESAFIO;

