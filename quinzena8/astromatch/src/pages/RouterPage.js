import React from 'react';
import MainPage from "./MainPage"
import MatchScreen from "./MatchScreen"
import {useState, useEffect} from "react";
import axios from 'axios';
import {MainPageStyle, SistemButton, Text} from './Styles'

function RouterPage() {
    const [currentScreen, setCurrentScreen] = useState('Main')
    const [user, setUser] = useState("")
    const [number2, setNumber2] = useState(1)

    const askUser = () => {
        setUser(prompt('Nome de usuario'))
    }

    useEffect(() => {
        askUser()
    },[])

    const onClickChangeScreen = () => {
        if (currentScreen === 'Main') {
            setCurrentScreen('Match')
        } else {
            setCurrentScreen('Main')
        }
    }

    const onClickCleanMatchs = () => {
        axios
            .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/clear`)
            .then ((ress) => {
                alert("O historico de matchs foi limpo com sucesso!")
                setNumber2(number2 +1)
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    const showScreen = () => {
        switch(currentScreen) {
            case 'Main':
                return <MainPage
                user={user}
                /> 
            case 'Match':
                return <MatchScreen
                user={user}
                number2={number2}
                />     
            default:
                return <MainPage
                user={user}
                />
        } 
    }

    return (
      <MainPageStyle>
        <SistemButton onClick={onClickCleanMatchs}><Text>LIMPAR MATCHS</Text></SistemButton>
        {showScreen()}
        <SistemButton onClick={onClickChangeScreen}><Text>MUDAR TELA</Text></SistemButton>
      </MainPageStyle>
    );
}

export default RouterPage;