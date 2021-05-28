import React from 'react';


export class AddUser extends React.Component {

    render() {

        return(
        <div>
            <h2>Criar Usuário</h2>
            <input  onChange={this.props.onChangeName} type="text" placeholder="Nome"/>
            <input  onChange={this.props.onChangeEmail} type="text" placeholder="E-mail"/>
            <button onClick={this.props.onClickAddUser}>Criar</button>
        </div>
    )}
}