import React from 'react';
import './App.css';

const nomeInput =  String;
const emailInput = String;


const quandoClicar = function (nomeInput, emailInput){
    if( nomeInput === String && emailInput === String){
        alert ('correto')
    } else if (nomeInput !== String && emailInput !== String){
        alert ('errado')
    }
}

const requestData = (e) => {
  e.preventDefault()
  fetch('').then(result => {
    this.setState({items:result.json()});
  });
}

function App() {
  return (
    <div className="App">

      <h1> Cadastro</h1>
      <form onSubmit={requestData}>
          <input type="text" name="nome" id={nomeInput} placeholder="nome"/>
          <input type="text" name="email" id={emailInput} placeholder="email"/>
          <button type="submit" onclick={quandoClicar}>enviar</button>
      </form>
    </div>
  );
}

export default App;
