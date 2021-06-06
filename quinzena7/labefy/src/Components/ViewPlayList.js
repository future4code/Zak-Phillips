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

const List = styled.div`
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
background-color: black;
color: white;
margin-left: 10px;
`

class ViewPlayList extends React.Component {
    state = {
        minhasListas: [],
    }

    componentDidMount() {
        this.getPlaylist();
    }

    getPlaylist = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {headers: {Authorization:'zak-phillips-munoz'}
      }).then((res) =>{
        this.setState({minhasListas: res.data.result.list})
    
      }).catch((err) => {
        console.log(err);
      })
    }

    onClickdeletePlaylist = (listId) => {
        const listDelete = listId;
        console.log(listDelete)
        if(window.confirm('Deletar essa playlist?')) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listDelete}`,
            {headers: { Authorization: "zak-phillips-munoz" }
            }).then(() => {
            alert('Playlist deletada!');
            this.getPlaylist();
        })
        .catch((err) =>{
          console.log(err.response.data)
        })
    }    
    }
    

    render() {
        console.log(this.state.minhasListas)
        const playlist = this.state.minhasListas.map((lista) =>{
            return <li>
                {lista.name}
                <Button onClick={() => this.onClickdeletePlaylist(lista.id)}> X </Button>
            </li>
        })
        

        return (
            <Corpo>
                <List>
                    <h3>Minhas playlists</h3>
                    <ul>
                     {playlist}
                    </ul>
                </List>
            </Corpo>
        );
    }
}

export default ViewPlayList;
  