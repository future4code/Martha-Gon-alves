const nomeInput =  String;
const emailInput = String;


const quandoClicar = function (nomeInput, emailInput){
    if( nomeInput === String && emailInput === String){
        alert ('correto')
    } else if (nomeInput !== String && emailInput !== String){
        alert ('errado')
    }
}