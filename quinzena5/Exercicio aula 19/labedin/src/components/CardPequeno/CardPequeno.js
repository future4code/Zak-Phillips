import React from 'react';
import styled from 'styled-components';

function CardPequeno(props) {
    return (
        <CardContainer>
            <Div>
                <CardContainerh3>Email:</CardContainerh3>
                <p>{props.email}</p><br></br>
                <CardContainerh3>Endereço:</CardContainerh3>
                <p>{props.endereco}</p><br></br>
            </Div>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const CardContainerh3 =  styled.h3`
    margin-bottom: 15px;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

export default CardPequeno;