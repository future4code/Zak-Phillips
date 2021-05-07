import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    usuarioInfo: [
          {nomeUsuario: 'paulinha',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'},
          {nomeUsuario:'Zak',
          fotoUsuario:'https://i.pinimg.com/originals/1b/ef/9f/1bef9f8413ea8339e4ad009f425c2529.png',
          fotoPost:'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fspencerbogart%2Ffiles%2F2017%2F12%2FDuck-Billed-Platypus.jpg'},
          {nomeUsuario:'Meu entendimento de React',
          fotoUsuario:'https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png',
          fotoPost:'https://i.kym-cdn.com/photos/images/masonry/001/853/135/4d6.jpg'}
    ],
   
    valorNome: "",
    valorFoto: "",
    valorPost: "",
  }

  onChangeInputName = (e) =>{
    this.setState({valorNome: e.target.value})
  }

  onChangeInputFoto = (e) =>{
    this.setState({valorFoto: e.target.value})
  }

  onChangeInputPost = (e) =>{
    this.setState({valorPost: e.target.value})
  }


  adicionarPost = () => {

    const novoUsuario = {
      nomeUsuario: this.state.valorNome,
      fotoUsuario: this.state.valorFoto,
      fotoPost: this.state.valorPost,
    }

    const listaDeUsuariosNova = [...this.state.usuarioInfo, novoUsuario];

    this.setState({usuarioInfo: listaDeUsuariosNova})
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido
    })
  
    if (!this.state.curtido) {
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
    } else {
      this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    const listaDeUsuarios = this.state.usuarioInfo.map((props) => {
      
      return (
        <PostContainer>
        <PostHeader>
          <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{props.nomeUsuario}</p>
        </PostHeader>
  
        <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>
  
        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />
  
          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}
      </PostContainer>
      )
    })
    
    return (
      <div>
      <input onChange={this.onChangeInputName} type="text" placeholder="Nome do usuario"/><br/>
      <input onChange={this.onChangeInputFoto} type="text" placeholder="Sua foto"/><br/>
      <input onChange={this.onChangeInputPost} type="text" placeholder="Seu post"/><br/>
      <button onClick={this.adicionarPost}>Enviar</button><br/><br/>
      {listaDeUsuarios}
      </div>
      )
  }
}

export default Post