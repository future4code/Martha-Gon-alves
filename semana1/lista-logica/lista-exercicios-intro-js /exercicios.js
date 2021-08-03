// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
      const numerosUsuario = Number(prompt('Digite a altura do retangulo?'))
      const numerosUsuario2 =  Number(prompt('Digite a largura do retangulo?'))
      
      const area = numerosUsuario * numerosUsuario2
    console.log(area)

}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Em que anos nós estamos?'))
  const anoNascimento =  Number(prompt('Em que ano você nasceu?'))
  
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    const imc = peso / (altura * altura)
    return imc
}

calculaIMC(68, 1,68)


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt('qual é o sue nome?')
  const idade = Number ( prompt('quantos anos voce tem?'))
  const email =  prompt('qual é o seu email?')

  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`

  console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const corFavorita1 = prompt('qual é a sua cor favorita 1?')
  const corFavorita2 = prompt('qual é a sua cor favorita 2?')
  const corFavorita3 = prompt('qual é a sua cor favorita 3?')

  const arrayDeCores = [corFavorita1, corFavorita2, corFavorita3]
  console.log(arrayDeCores)
 
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
      const tranformandoString = string.toUpperCase()
      return tranformandoString
}

const fraseMaiscula = retornaStringEmMaiuscula('porquinho arainha')

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const resultadoVendas = custo / valorIngresso
  return resultadoVendas

}

const infosVendas = calculaIngressosEspetaculo (3000, 100 )

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
      const tamanhoStrings = string1.length >= string2.length
      return tamanhoStrings
}

const enviandoString = checaStringsMesmoTamanho ('porco aranha', 'porco aranha')

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroItem= array[0]
  return primeiroItem

}

const enviandoArray =  retornaPrimeiroElemento([1,2,3,4,5,6,7,8,9])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  //resolução da professora chijo
  const ultimoItem = array[array.length-1]
  return ultimoItem
}

const enviandoArray2 =  retornaUltimoElemento([1,2,3,4,5,6,7,8,9])


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  //resolução da professora chijo
      const primeiro = retornaPrimeiroEUltimo(array)
      const ultimo = retornaPrimeiroEUltimo(array)

      array [0] = ultimo
      array[array.length -1] = primeiro

      return array

}
 const enviandoArray3 =  trocaPrimeiroEUltimo([1,2,3,4,5,6,7,8,9])

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}