//INTERPRETACAO DE CODIGO
/* 
//RESPOTA 1 

        Sera impresso no console cada objeto do array, um de cada vez 
        individualmente!

//RESPOTA 2

    Sera impresso um array somente com os nomes dos objtos que estao dentro 
    do array.


//RESPOTA 3

    Sera impresso um array com os objetos que contem apelidos difrentes do 
    apelido chijo.
*/

//ESCRITA DE CODIGO
//RESPOTA 1

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const nameOfThePets = pets.filter((namePets) => {
    return namePets.nome
})

console.log(nameOfThePets)

const petsSalsicha = pets.filter((salsichaPets) => {
    return salsichaPets.raca === "Salsicha"
}
)

console.log(petsSalsicha)

const cupomPoodles = pets.filter((cupomDesconto) => {
     if(cupomDesconto.raca === "Poodle"){
         return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cupomDesconto.name}`
     }
})

console.log(cupomPoodles)


//RESPOTA 2

let produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 const nomePrecoEDesconto = produtos.map((produto, desconto, resultado) => {
     

    if (produto.preco ){
      //RESOLUCAO PROFESSORA CHIJO
            return {nome: produto.nome, preco:(produto.preco * 95) . toFixed(2)};
     } 
 });

 console.log(nomePrecoEDesconto)

 const produtosBebidas = produtos.filter((produto) => {
       return produto.categoria === "Bebidas"
 })

 console.log(produtosBebidas)

 const produtosYpe = produtos.filter((produto) => {
     return produto.nome.includes("Ypê")
 })

 console.log(produtosYpe)


 const fraseYpe = produtos.map((produto) => {
    if(produto.nome.includes('Ypê')){
        return `Compre ${produto.nome} por ${produto.preco}!`
    }
 }).filter((item) => item != undefined)

 console.log(fraseYpe)


 //DESAFIO


const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

const emOrdemAlfabetica = pokemons.map((pokemon) => {
     return pokemon.nome
})

emOrdemAlfabetica.sort()
console.log(emOrdemAlfabetica)


      //AJUDA DA PROFESSORA CHIJO PARA RESOLUCAO 

const tiposDepokemons = pokemons.map((pokemon) => {
    return pokemon.tipo
}).filter((tipo, index, array) => {
    return array.indexOf(tipo) === index;
})

console.log(`tipo de pokemon que contem na lista ${tiposDepokemons}`)