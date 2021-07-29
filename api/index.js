import React from 'react'


const nomeInput =  String;
const emailInput = String;


const quandoClicar = function (nomeInput, emailInput){
    if( nomeInput === String && emailInput === String){
        alert ('correto')
    } else if (nomeInput !== String && emailInput !== String){
        alert ('errado')
    }
}
function index() {
    return (
        <div>
                <input type="text" name="nome" id="nome" placeholder="nome"/>
                <input type="text" name="email" id="email" placeholder="email"/>
                <button type="submit" onclick={quandoClicar}>enviar</button>
        </div>
    )
}

export default index
