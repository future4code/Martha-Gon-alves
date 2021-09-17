import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFmC6grH7f4LQ/profile-displayphoto-shrink_800_800/0/1625422834790?e=1636588800&v=beta&t=8B3DSGR3vgCXd1nE0yfViMo95kNt0vxsiCNXPpVjEmw" 
          nome="Martha Cristiny" 
          descricao="Oi, eu sou a Martha Cristiny. Sou estudante, aluna da Labenu. Estou aqui em busca do conhecimento das tecnologias utilizadas na programação. Tenho pouca experiencia, mas o meu objetivo é me tornar otima nisso!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
          <CardPequeno
              imagem= 'https://img-premium.flaticon.com/png/512/69/premium/69957.png?token=exp=1631054542~hmac=c395cf9d703f57fab6638387945adf02'
              email='Email:'
              texto= 'marthacristinyavelar@gmail.com'
          />
      </div>


      <div className='page-section-container'>
          <CardPequeno
              imagem= 'https://cdn-icons-png.flaticon.com/512/15/15766.png'
              endereco='Endereço: '
              texto= 'Rua xingu, 161, bloco1, apartamento 1202'
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
    </div>
  );
}

export default App;
