import React from 'react';
import axiosWithAuth from "../../utils/axiosWithAuth";
import { StyledSidebar } from '../../styles/sidebar';

export default function Sidebar(props) {
    const { gameData, setGameData } = props;
   
    const movePlayer = e => {
      axiosWithAuth()
        .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", {
          direction: e.target.id
        })
        .then(res => {
          setGameData(res.data)
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    return (
      <StyledSidebar>
        {!gameData ? (
          "Loading"
        ) : (
            <>
          <div className='game-data'>
              <p>Player: {gameData.name}</p>
              <p>Room Title: {gameData.title}</p>
              <p>Room Description: {gameData.description}</p>
          </div>
          <div className='controls'>
            <button id="n">N</button>
            <button id="s">S</button>
            <button id="e">E</button>
            <button id="w">W</button>
          </div>
          <div className='players'>
            {gameData.players.map(player => <p key={player}>{player}</p>)}
          </div>
          </>
        )}
      </StyledSidebar>
    );
  }