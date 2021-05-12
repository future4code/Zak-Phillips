import React from 'react';
import styled from 'styled-components';

const MeuForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class SemSuperior extends React.Component {



    render() {


        return <MeuForm>
           <h1>ETAPA 2 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input type="text" />
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
            </select>
        </MeuForm>
    }
}    

export default SemSuperior;