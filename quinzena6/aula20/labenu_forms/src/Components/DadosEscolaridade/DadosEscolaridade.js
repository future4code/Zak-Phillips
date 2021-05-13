import React from 'react';
import styled from 'styled-components';

const MeuForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class DadosEscolaridade extends React.Component {



    render() {


        return <MeuForm>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <p>5. Qual curso?</p>
            <input type="text" />
            <p>6. Qual a unidade de ensino?</p>
            <input type="text" />
        </MeuForm>
    }
}    

export default DadosEscolaridade;