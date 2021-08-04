/*Interpretação de código

1 - RESPOSTA:
        A console1 - Matheus Nachtergaele
          console2 - Virginia Cavendish
          console3 - canal: "Globo", horario: "14h"

2 - RESPOSTA: 
        A console1 - "Juca", 3,"SRD"
          console2 - "Juba", 3,"SRD"
          console3 - "Jubo", 3,"SRD"

        B - Ele copia o objeto interiro, e permite que mude o obj, adicionando mais propriedades.

3 - RESPOSTA:
        A console1 - false
          console2 - undefined 

        B - No console foi chamado a função e como parametros foi passado a lista de objetos e 
            uma string .  Dentro da função foi solicitado, basicamente uma verificação, se 
            determinada propriedade existe dentra do objeto que foi passado!
              
*/

//Escrita de código
// 1 - RESPOSTA:

      const martha = {
        nome: 'Martha',
        apelidos: ['Martinha', 'Coalinha', 'Neneca']
      }

      const recebendoObj = (obj) =>{
        console.log(`Oi, meu nome é ${obj.nome}, mas pode me chamar  pelos meus apelidos, que são: ${obj.apelidos[0]},${obj.apelidos[1]}, ${obj.apelidos[2]}.`)
      }

      recebendoObj(martha)

// 2 - RESPOSTA:

      const pessoa1 = {
        nome: 'martha',
        idade: 22,
        profissao: 'estudante'
      }
      const pessoa2 = {
        nome: 'ed',
        idade: 26,
        profissao: 'programador'
      }

    const recebendoObjs2 = (obj1, obj2) => {
          const arrayDeInfos = [obj1.nome, obj1.nome.length, obj1.idade, obj1.profissao, obj1.profissao.length]
          const arrayDeInfos2 = [obj2.nome, obj2.nome.length, obj2.idade, obj2.profissao, obj2.profissao.length]

          console.log(arrayDeInfos, arrayDeInfos2)
    }

    recebendoObjs2(pessoa1, pessoa2)


    // 3 - RESPOSTA:

    let carrinhoArray = []

    const fruta1 = {
      nome: 'cereja',
      disponibilidade: true
    }

    const fruta2 = {
      nome: 'morango',
      disponibilidade: true
    }
    const fruta3 = {
      nome: 'manga',
      disponibilidade: true
    }

    const preenchendoCarrinho = (fru1, fru2, fru3) => {
          carrinhoArray.push(fru1, fru2, fru3)
    }

    preenchendoCarrinho(fruta1, fruta2, fruta3)
  
  console.log(carrinhoArray)

// DESAFIO:
// 1 - RESPOSTA:

    const perguntinhas = () =>{
      const pergunta1 = prompt('Qual é o seu nome?')
      const pergunta2 = Number( prompt('Qual é a sua idade') )
      const pergunta3 = prompt('Qual é a sua profissao?')

      const objInfos = {
        nome: pergunta1,
        idade: pergunta2,
        profissao: pergunta3
      }

      console.log(objInfos, `tipo de valor da variavel: ${typeof objInfos}`)
    }

    perguntinhas()

// 2 - RESPOSTA:

const filme1 = {
  nomeDoFilme:'Martha Cristiny',
  anoDeLancamento:1999,
}

const filme2 = {
  nomeDoFilme:'Ed dos prazeres',
  anoDeLancamento:1995,
}

const recebendoInfosDeFilmes = (info1, info2) => {
    const quemVeioPrimeiro = info1.anoDeLancamento <= info2.anoDeLancamento
    const mesmoAnoDeLancamento = info1.anoDeLancamento === info2.anoDeLancamento

    const frase1 = `O primeiro filme foi lançado antes do segundo? ${quemVeioPrimeiro}`
    const frase2 = `O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAnoDeLancamento}.`

    const uniaoFrases = `${frase1}, ${frase2}`

    return uniaoFrases
    
  
}

const imprimir = recebendoInfosDeFilmes(filme1, filme2)

console.log(imprimir)


// 3 - RESPOSTA:
 let estoque = []

    const controleDeStoque = (info) => {
           info.disponibilidade = false

           estoque.push(info)
    }

    controleDeStoque(fruta1)
  
  console.log(estoque)