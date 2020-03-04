import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import Sidebar from './Sidebar';
import Map from "./Map";
import { StyledGameWrapper } from '../../styles/game';

export default function Game(props) {
  const [gameData, setGameData] = useState();

  useEffect(() => {
  }, []);

  return (
    <StyledGameWrapper>
      <Map />
      {!gameData ? (
        "Loading"
      ) : (
        <Sidebar gameData={gameData} setGameData={setGameData}/>
      )}
    </StyledGameWrapper>
  );
}
