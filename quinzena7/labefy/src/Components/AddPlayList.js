import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Corpo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
background-color: black;
color: white;
`
const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;
height: 350px;
width: 300px;
border-radius: 15px;
border-width: 2px;
border-style: solid;
`
const Button = styled.button`
border-radius: 15px;
height: 40px;
width: 150px;
background-color: black;
color: white;
font-weight: bold;
margin-top: 60px;
`

class AddPlayList extends React.Component {
    state = {
        listName: '',
    }

    onChangeName = (e) => {
        this.setState({listName: e.target.value });
        console.log(this.state.listName)
    };

    criarLista = () => {
        const body = {
            name: this.state.listName,
        } 

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
        {headers: {Authorization: 'zak-phillips-munoz'}
        }).then((res) => {
            alert("Playlist adicionada com sucesso!")
            this.setState({listName: ''});
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    render() {
    
        return (
            <Corpo>
                <Form>
                    <h3>Adicionar playlist</h3>
                    <p>Nome da playlist</p>
                    <input type="text" value={this.state.listName} onChange={this.onChangeName}></input>
                    <Button onClick={this.criarLista}>Criar</Button>
                </Form>
            </Corpo>
        );
    }
}
  
export default AddPlayList;
 