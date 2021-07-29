/*INTERPRETAÇÃO DE CÓDIGO 

1 RESPOSTA : console.log(10, 5)
             a variavel b passou a ter valor 5 após mudarmos o valor da variavel. 
---------------------

2 RESPOSTA : console.log(10, 10, 10)
             
            C que nao tinha valor passou a ter o valor da variavel A
            B que tinha o valor 20 passou a ter o valor da variavel C (o valor da letra C agora é o valor da letra A)
            A que tinha o valor 10 passou a ter o valor da letra B (O valor da letra B agora é o valor da letra C depois que passou a ter o valor da letra A)

--------------------

3 RESPOSTA : variavel 1 - quantasHorasPDia
             variavel 2 - quantoRecebePDia

*/

//ESCRITA DE CÓDIGO 
//1 RESPOSTA:
                let nome 
                let idade 
                console.log('tipo do valor da variavel', typeof nome , typeof idade)

                //Esse tipo de valor foi impresso pois nenhuma das variaveis te valor atribuido.


                const nomeUsuario = prompt('Qual é o seu nome?')
                const idadeUsuario = Number(prompt('Qual é a sua idade?'))


                nome = nomeUsuario
                idade = idadeUsuario
                console.log('tipo do valor da variavel', typeof nome , typeof idade)

                //Esse tipo de valor foi impresso pois as variaveis passaram a ter valor atribuido. 
                //Todo prompt deolver uma string idapendete tiver colocado uma string ou nao, por isso 
                //o valor da variavel nome foi impressa como string, já o valor da variavel idade deu 
                //number pois fiz a conversao do prompt de string para number.


                console.log('Ola, meu nome é', nome, 'e eu tenho', idade , 'anos de idade!')

//2 RESPOSTA:
                const pergunta1 = 'esta estuando agora?'
                const pergunta2 = 'esta lanchando enquanto estuda?'
                const pergunta3 = 'esta comendo biscoito doce?'

                const resposta1 = 'SIM'
                const resposta2 = 'SIM'
                const resposta3 = 'NÃO'

                console.log(pergunta1, resposta1)
                console.log(pergunta2, resposta2)
                console.log(pergunta3, resposta3)
//3 RESPOSTA:

                let a = 10
                let b = 25
                let c

                 c = a
                 a = b
                 b = c

                console.log("O novo valor de a é", a) 
                console.log("O novo valor de b é", b) 

//DESAFIO
//RESPOSTA:

const numeroDoUsuario = Number(prompt('Digite um numero?'))
const numeroDoUsuario2 = Number(prompt('Digite um numero?'))

const soma2 = numeroDoUsuario + numeroDoUsuario2
const multiplicacao = numeroDoUsuario * numeroDoUsuario2


console.log('O resultado da soma é', soma2 , 'e o resultado da multiplicaçao é', multiplicacao)