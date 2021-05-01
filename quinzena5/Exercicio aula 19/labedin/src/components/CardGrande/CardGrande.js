import React from 'react';
import styled from 'styled-components';

function CardGrande(props) {
    return (
        <BigcardContainer>
            <BigcardImg src={ props.imagem } />
            <Div>
                <BigcardH4>{ props.nome }</BigcardH4>
                <p>{ props.descricao }</p>
            </Div>
        </BigcardContainer>
    )
}

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const BigcardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigcardH4 = styled.h4`
    margin-bottom: 15px;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

export default CardGrande;