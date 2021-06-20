import React from 'react';
import {Button1, Button2, Align} from '../../pages/Styles'

function MatchButtons(props) {
    return (
      <Align>
            <Button1 onClick={props.onClickReject}><h1>X</h1></Button1>
            <Button2 onClick={props.onClickMatch}><h2>MATCH</h2></Button2>
      </Align>
    );
}

export default MatchButtons;