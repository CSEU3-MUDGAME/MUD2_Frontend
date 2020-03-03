import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import Sidebar from './Sidebar';
import Map from "./Map";
import { StyledGameWrapper } from '../../styles/game';

export default function Game(props) {
  const [gameData, setGameData] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
      .then(res => {
        console.log(res);
        setGameData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const movePlayer = e => {
    axiosWithAuth()
      .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", {
        direction: e.target.id
      })
      .then(res => {
        console.log(res);
        setGameData(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

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
