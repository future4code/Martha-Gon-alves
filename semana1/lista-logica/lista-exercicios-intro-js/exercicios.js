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
  peso = Number(prompt('Digite o peso atual!'))
  altura = Number(prompt('Digite o altura atual!'))
  const IMC = peso / (altura * altura)

  console.log(IMC);
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
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
  const string = prompt('Digite uma palavra!')
  
  
  console.log(string.toUpperCase())

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const frase1 = "oi"
  const frase2 = "oi"
  const resultado = frase1 && frase2
  
  console.log(resultado)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

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