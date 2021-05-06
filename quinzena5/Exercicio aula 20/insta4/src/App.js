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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Zak'}
          fotoUsuario={'https://i.pinimg.com/originals/1b/ef/9f/1bef9f8413ea8339e4ad009f425c2529.png'}
          fotoPost={'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fspencerbogart%2Ffiles%2F2017%2F12%2FDuck-Billed-Platypus.jpg'}
        />

        <Post
          nomeUsuario={'Meu entendimento de React'}
          fotoUsuario={'https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png'}
          fotoPost={'https://i.kym-cdn.com/photos/images/masonry/001/853/135/4d6.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
