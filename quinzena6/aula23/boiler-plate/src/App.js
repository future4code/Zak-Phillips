import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {id: Date.now() + 1,
	      texto: 'Fazer a atividade da Labenu.',
	      completa: false},
        {id: Date.now(),
	      texto: 'Warmup da Labenu.',
	      completa: true},
      ],


      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("Tarefa", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefaString = localStorage.getItem("Tarefa")

    const tarefaObjeto = JSON.parse(tarefaString)

    this.setState({tarefas: tarefaObjeto})
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    
    if(this.state.inputValue) {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    }

    const novaLista = [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas: novaLista})
    this.setState({inputValue: ''})
   }
  } 

  apagarTarefa = (TEXTO) => {
    const novaLista = this.state.tarefas.filter((props) => { 
       return TEXTO !== props.texto
    })

    this.setState({tarefas: novaLista})
    this.setState({inputValue: ''})
  }

  selectTarefa = (ID) => {

    const novaLista = this.state.tarefas.map((props) => {
      if (ID === props.id) {
        const novasTarefas = {
          ...props,
          completa: !props.completa
        }
        return novasTarefas
      } else {
        return props
      }
    })

    this.setState({tarefas: novaLista})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={() =>this.apagarTarefa(this.state.inputValue)}>Remover</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
