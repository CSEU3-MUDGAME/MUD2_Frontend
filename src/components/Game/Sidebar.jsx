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
          Sidebar
        {!gameData ? (
          "Loading"
        ) : (
          <div>
              <p>{gameData.name}</p>
          </div>
        )}
      </StyledSidebar>
    );
  }