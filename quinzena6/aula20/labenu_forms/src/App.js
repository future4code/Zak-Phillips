import React from 'react';
import styled from 'styled-components';
import DadosPessoais from './Components/DadosPessoais/DadosPessoais.js'; 
import DadosEscolaridade from './Components/DadosEscolaridade/DadosEscolaridade.js';
import SemSuperior from './Components/SemSuperior/SemSuperior.js';
import Agradecimentos from './Components/Agradecimentos/Agradecimentos.js';

const MeuForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class App extends React.Component {
    state = {
      etapa: 1,
    }

    renderizarEtapa = () => {
      let etapaAtual 

      switch (this.state.etapa) {
        case 1:
          etapaAtual = <DadosPessoais/>;
          break;
        case 2:
          etapaAtual = <DadosEscolaridade/>
          break;
        case 3:
          etapaAtual = <SemSuperior/>
          break;
        case 4:
          etapaAtual = <Agradecimentos/>
        break;
      }
      return  etapaAtual //Poderia colocar return em vez de break e não usar a constante.
    }

    renderizarButton = () => {
      if (this.state.etapa === 4) {
        return <></>
      }

      return <MeuForm><button onClick={this.onClickMudarEtapa}>Próxima etapa</button></MeuForm>
    }

    onClickMudarEtapa = () => {
      this.setState({etapa: this.state.etapa + 1})
    }

  render() {

    return (
    <div>
      {this.renderizarEtapa()}
      <p></p>
      {this.renderizarButton()}
    </div>
  )}
}

export default App;
