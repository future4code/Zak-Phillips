import React from 'react';
import styled from 'styled-components';

const MeuForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class Agradecimentos extends React.Component {



    render() {


        return <MeuForm>
            <h1>O FORMULÁRIO ACABOU</h1>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </MeuForm>
    }
}    

export default Agradecimentos;