import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import PerfilCards from '../components/PerfilCards/PerfilCards'
import MatchButtons from '../components/MatchButtons/MatchButtons';
import {CardStyle} from './Styles'


function MainPage(props) {
    const [person, setPerson] = useState({});
    const [number, setNumber] = useState(1)

    useEffect(() => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${props.user}/person`)
            .then((ress) => {
                setPerson(ress.data.profile);
            })
            .catch(err => {
                console.log(err);
            });
    },[number, props.user])

    const onClickMatch = (myChoice) => {
        const body = {
            id: person.id,
            choice: myChoice
        }
        axios
            .post (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${props.user}/choose-person`, body)
            .then ((ress) => {
                setNumber(number + 1)
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
      <CardStyle> 
          {person? <> <PerfilCards
        name={person.name}
        img={person.photo}
        age={person.age}
        bio={person.bio}
        />
        <MatchButtons
        onClickReject={() => onClickMatch(false)}
        onClickMatch={() => onClickMatch(true)}
        /> </>: <div><h2>Acabou!</h2></div>}
      </CardStyle>
    );
}

export default MainPage;