import React from 'react';
import {PhotoMain, PerfilCardStyle} from '../../pages/Styles'

function PerfilCards(props) {
    return (
        <PerfilCardStyle>
            <div><h3>Astromatch</h3></div>
            <PhotoMain src={props.img} alt="Profile foto"/>
            <div>
                <h3>{props.name}, {props.age}</h3>
                <p>{props.bio}</p>
            </div>
        </PerfilCardStyle>
    );
}

export default PerfilCards;