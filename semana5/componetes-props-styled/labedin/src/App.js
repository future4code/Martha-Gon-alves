import React from 'react';
import styled from 'styled-components';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardEmail from './components/CardEmail/CardEmail';
import CardEndereco from './components/CardEndereco/CardEndereco';


const BigCardContainer = styled.BigcardContainer.CardGrande`
          display: flex;
          align-items: center;
          border: 1px solid black;
          padding: 20px 10px;
          margin-bottom: 10px;
          height: 200px;
`
styled.BigcardContainer.img`
          width: 70px;
          margin-right: 10px;
          border-radius: 50%;
`

styled.BigcardContainer.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

styled.BigcardContainer.h4`
      margin-bottom: 15px;
`



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <BigCardContainer>
          <CardGrande 
            imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
            nome="Astrodev" 
            descricao="Oi, eu sou o Astrodev. Sou o chefe dos alunos da Labenu. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."

          />
        </BigCardContainer>
          
       
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>


      <div className="page-section-container">
        <h2>Meu Contato</h2>
        <CardEmail
              imagem = './img/gmail-logo.png'
              email = 'martha@gmail.com'
        />
             
      </div>
      <div className="page-section-container">
        <h2>Meu Endereço</h2>
        <CardEndereco
              imagem = './img/desenho-localizacao.png'
              endereco = 'Rio de janeiro, Rua desenvolvedor FullStack, número 666. Edificio Lasco - CEP 01101111 01101001  '
        />
             
      </div>
    </div>
  );
}

export default App;
