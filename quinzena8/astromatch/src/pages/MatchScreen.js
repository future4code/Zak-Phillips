import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import {PhotoMatches, Align, Align2} from './Styles'

function MatchScreen(props) {
  const [myMatches, setMyMatches] = useState([]);

  useEffect(() => {
    axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${props.user}/matches`)
        .then((ress) => {
            setMyMatches(ress.data.matches);
        })
        .catch(err => {
            console.log(err);
        });
  },[props.number2]) 

  return (
    <>
      {myMatches.length !== 0 ? <Align>
        {myMatches.map((person) =>{
        return <Align2>
          <PhotoMatches src={person.photo} alt="Profile foto"/>
          <b>{person.name}</b>
        </Align2>
      })}
    </Align> : <div><h1>Sem Matches!</h1></div>}
    </>
  );
}

export default MatchScreen;