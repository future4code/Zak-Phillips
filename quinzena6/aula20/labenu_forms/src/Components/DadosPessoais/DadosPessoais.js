import React from 'react';
import styled from 'styled-components';

const MeuForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class DadosPessoais extends React.Component {



    render() {


        return <MeuForm>
            <h1>ETAPA 1 - DADOS GERAIS:</h1>
            <p>1. Qual o seu nome?</p>
            <input type="text" />
            <p>2. Qual sua idade?</p>
            <input type="text" />
            <p>3. Qual o seu email?</p>
            <input type="email" />
            <p>4. Qual sua escolaridade?</p>
            <select>
            <option>-</option><option>Ensino médio incompleto</option><option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option><option>Ensino superior completo</option>
            </select>
        </MeuForm>
    }
}    

export default DadosPessoais;