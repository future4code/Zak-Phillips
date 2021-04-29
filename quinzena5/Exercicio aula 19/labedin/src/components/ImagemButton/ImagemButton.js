import React from 'react';
import styled from 'styled-components';

function ImagemButton(props) {
    return (
        <ButtonContainer>
            <ImageContainer src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ButtonContainer>

    )
}

const ButtonContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`

const ImageContainer = styled.img`
    width: 30px;
    margin-right: 10px;
`

export default ImagemButton;