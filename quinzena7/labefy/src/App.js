import React from 'react';
import styled from 'styled-components';
import AddPlayList from './Components/AddPlayList';
import ViewPlayList from './Components/ViewPlayList';

const HomePage = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  background-color: black;  
`
const Main = styled.div`

`

const Header = styled.div`
height: 100px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: solid;
border-width: 1px;
padding-bottom: 20px;
background-color: black;
color: white;
`
const Footer = styled.div`
height: 100px;
display: flex;
justify-content: center;
align-items: center;
border-top: solid;
border-width: 2px;
background-color: black;
color: white;
`
const Button = styled.button`
border-radius: 15px;
height: 40px;
width: 150px;
background-color: black;
color: white;
font-weight: bold;
position: absolute;
top: 7%;
right: 5%;
`

const Titulo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class App extends React.Component {
  state = {
    tela: 'AddPlayList',
    botaoTela: 'Ir para playlist',
  }

  defineTela = () => {
    switch(this.state.tela){
      case 'AddPlayList':
        return <AddPlayList/>
      case 'ViewPlayList':
        return <ViewPlayList/>
      default:
        return <div>Error!Não encontramos sua página!</div>
    }
  }
  
  onClickChangeTela = () => {
    if(this.state.tela === 'AddPlayList') {
      this.setState({tela: 'ViewPlayList', botaoTela: 'Criar uma playlist'})
    } else {
      this.setState({tela: 'AddPlayList', botaoTela: 'Ir para playlists'})
    } 
  }

  render() {
    

    
    return (
      <HomePage>
        <Header>
          <Titulo>          
            <h1>Bem-vindo ao Labefy!</h1>
            <p>Sua lista pessoal das melhores músicas para todas as ocasiões!</p>
          </Titulo>
          <Button onClick={this.onClickChangeTela}>{this.state.botaoTela}</Button>
        </Header>
        <Main>
          {this.defineTela()}
        </Main>
        <Footer>
          <p>Em construção</p>
        </Footer>
      </HomePage>
    );
  }
}

export default App;
