import React from 'react';


export class ListaUsers extends React.Component {

    render() {
       
        return(
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {this.props.usuario.map((usuario) =>{
                return <li>{usuario.name} <button onClick={() => this.props.onClickRemoverUser(usuario.id)}>Deletar</button></li>
                })}
            </ul>
        </div>
    )}
}