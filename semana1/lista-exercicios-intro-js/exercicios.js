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
  const altura = Number(prompt('Digite uma altura para o retangulo!'))
  const largura = Number(prompt('Digite uma largura para o retangulo!'))
  console.log(altura * largura);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual!'))
  const anoNascimento = Number(prompt('Digite o seu ano de nascimento!'))

  console.log(anoAtual - anoNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura * altura)
  return IMC

}

const pesoUsuario = Number(prompt('Digite o peso atual!'))
const alturaUsuario = Number(prompt('Digite o peso atual!'))
calculaIMC(pesoUsuario, alturaUsuario)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite o seu nome!')
  const idade = Number(prompt('Digite aqui a sua idade!'))
  const email = prompt('Digite o seu ano de nascimento!')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite sua primeira cor favorita!')
  const cor2 = prompt('Digite sua segunda cor favorita!')
  const cor3 = prompt('Digite o seu ano de nascimento!')

  const cores = [cor1, cor2, cor3]

  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
        const porquinhoArainha = string.toUpperCase()
        return porquinhoArainha

}

const string = retornaStringEmMaiuscula('porco aranha')

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
        const vendasNecessarias = custo / valorIngresso
        return vendasNecessarias

}

const teatroSpectacullu = calculaIngressosEspetaculo(3000, 100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho1 = string1.length
  const tamanho2 = string2.length
  const resultado = tamanho1 >= tamanho2

  return resultado

}
const frases = checaStringsMesmoTamanho("OI", "UI")
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
        const primeiroElemento = array[0]
        return primeiroElemento

}

const arrayzinho = retornaPrimeiroElemento([1,2,3,4,5,6,7,8])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
      const ultimoElemento = array[array.length -1]
      return ultimoElemento

}

const arrayzinho2 = retornaUltimoElemento([1,2,3,4,5,6,7,8,9])

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

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    return string1.toLowerCase() === string2.toLowerCase()



}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt('em que ano nós estamos?'))
  const anoDeNascimento = Number(prompt('em que ano voce nasceu?'))
  const anoEmissaoDeCarteira = Number(prompt('em que ano voce tirou sua carteira de id?'))
  
    const idade = anoAtual - anoDeNascimento
    const tempoDoRG = anoAtual - anoEmissaoDeCarteira

    const condicao1 = idade <= 20 && tempoDoRG >= 5
    const condicao2 = idade > 20 && idade <=50 && tempoDoRG >= 10
    const condicao3 = idade > 50 && tempoDoRG >= 15

    console.log(condicao1 || condicao2 || condicao3 )
}

checaRenovacaoRG(anoAtual, anoDeNascimento, anoEmissaoDeCarteira)
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
    
    const condicao1 = ano % 400 === 0
    const condicao2 = (ano % 4 === 0) && (ano % 100 !== 0)

    return condicao1 || condicao2


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 

  const maiorDeIdade = prompt('Voce é maior de 18 anos de idade?')
  const ensinoMedio = prompt('Você tem ensio medio completo?')
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horarios do curso?')

  console.log(maiorDeIdade === 'sim' && ensinoMedio === 'sim' && disponibilidade === 'sim')

}