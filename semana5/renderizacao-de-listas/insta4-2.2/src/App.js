import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    nomeUsuario:'',
    fotoUsuario:'',
    fotoPost:'',
    posts: [
      {
        nomeUsuario:'Martinha',
        fotoUsuario:'https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both',
        fotoPost:'http://s2.glbimg.com/h3Duok3KWVA8yaIOzZZIESkNLC4DKPsVVGWWhNMHhpNIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2013/08/02/imagem_para_sexta_51.jpg'
        
      },
      {
          nomeUsuario:'Luffy',
          fotoUsuario:'https://thumbs.jusbr.com/imgs.jusbr.com/publications/artigos/images/capturar1452194585.JPG',
          fotoPost:'https://www.guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg' 
      },
      {
          nomeUsuario:'Ed',
          fotoUsuario:'https://mundoconectado.com.br/uploads/chamadas/cs_go_chamada.jpg',
          fotoPost:'https://static.draft5.gg/news/2020/03/14132107/1280x800-counter-strike-selfie-time-4k_1543621001.jpg'
      },
    ]
  }

  changeNomeUsuario = (event) => {
      this.setState({
        nomeUsuario: event.target.value
      })
  }
  changeFotoUsuario = (event) => {
      this.setState({
        fotoUsuario: event.target.value
      })
  }
  changeFotoPost = (event) => {
      this.setState({
        fotoPost: event.target.value
      })
  }




   addPost = () => {
    const newPost = [...this.state.posts, {
      nomeUsuario:this.state.nomeUsuario,
      fotoUsuario:this.state.fotoUsuario,
      fotoPost:this.state.fotoPost,
    }]

    this.setState({
      posts: newPost,
      nomeUsuario:'',
      fotoUsuario:'',
      fotoPost:'',
    
    })
    
   }

  render() {

  

     const postList = this.state.posts.map(({ fotoUsuario, nomeUsuario, fotoPost }) => <Post nomeUsuario={nomeUsuario} fotoUsuario={fotoUsuario} fotoPost={fotoPost}/>)
     

    

    return (
      <MainContainer>
      <ul>{postList}</ul>
        <div>

          <h2>CRIE UMA NOVA POSTAGEM</h2>

            <div>
                  <input 
                  placeholder='User Name' 
                  value={this.state.nomeUsuario} 
                  onChange={this.changeNomeUsuario}
                  />

                  <input 
                  placeholder='URL User Image' 
                  value={this.state.fotoUsuario}
                  onChange={this.changeFotoUsuario}
                  />
                  <input 
                  placeholder='URL User Post' 
                  value={this.state.fotoPost}
                  onChange={this.changeFotoPost}
                  />
            <button onClick={this.addPost}>CRIAR</button>
            </div>
        </div>
      </MainContainer>

       
    );
  }
}

export default App;
