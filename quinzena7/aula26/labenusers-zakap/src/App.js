import React from 'react';
import {AddUser} from './components/AddUser/AddUser.js';
import {ListaUsers} from './components/ListaUsers/ListaUsers.js';
import axios from 'axios';
import './App.css';

export class App extends React.Component {
  state = {
    telaAtual: 'AddUser',
    meusUsuarios: [],
    inputName: '',
    inputEmail: '',
  }
  
  componentDidMount() {
    this.getUsers();
  }

  onChangeName = (e) => {
    this.setState({inputName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({inputEmail: e.target.value });
  };

  getUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {headers: {Authorization:'zak-phillips-munoz'}}
    ).then((response) =>{
      this.setState({meusUsuarios: response.data})
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response.data);
    })
  }

  onClickAddUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
    {headers: {Authorization: 'zak-phillips-munoz'}
    }).then((resonse) => {
        this.setState({inputName: ''})
        this.setState({inputEmail: ''})
        alert("Usuário adicionado com sucesso!")
        this.getUsers()
      }).catch((error) => {
        alert("Error ao adicionar Usuário")
        console.log(error.response.data);
      });
  };

  onClickRemoverUser = (userId) => {
    const userDelete = userId;
    console.log(userDelete)
    if(window.confirm('Deletar esse usuário?')) {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userDelete}`,
        {headers: { Authorization: "zak-phillips-munoz" }},)
        .then(() => {
          alert('Usuário deletado!');
          this.getUsers()
        })
        .catch((error) =>{
          console.log(error.response.data)
        })
    }    
  } 

  onClickChangeTela = () => {
    if(this.state.telaAtual === 'AddUser') {
      this.setState({telaAtual: 'ListaUsers'})
    } else {
      this.setState({telaAtual: 'AddUser'})
    } 
  }

  render() {
      const minhaTela = this.state.telaAtual
      let mostrarTela = <div></div>
      
      switch(minhaTela) {
        case 'AddUser':
          mostrarTela = <AddUser
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          onClickAddUser={this.onClickAddUser}
          />
          break;
        case 'ListaUsers':
          mostrarTela= <ListaUsers
          usuario={this.state.meusUsuarios}
          onClickRemoverUser={this.onClickRemoverUser}
          />
          break;
        default:
          <p>Error</p>
      } 

    return(
      <div>
        <div>
          <h1>Labenusers-ZakAP</h1>
          <button onClick={this.onClickChangeTela}>Trocar página</button>
        </div>
        <div>{mostrarTela}</div>
      </div>
  )}
}

export default App;
