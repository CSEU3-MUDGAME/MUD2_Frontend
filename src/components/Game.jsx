import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Game(props) {
  const [roomData, setRoomData] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
      .then(res => {
        console.log(res);
        setRoomData(res.data);
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
        setRoomData(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      Game
      {!roomData ? (
        "Loading"
      ) : (
        <div>
          <p>Player: {roomData.name}</p>
          <p>Location: {roomData.title}</p>
          <p>Description: {roomData.description}</p>
          <div>
              <button id="n" onClick={movePlayer}>N</button>
              <button id="s" onClick={movePlayer}>S</button>
              <button id="e" onClick={movePlayer}>E</button>
              <button id="w" onClick={movePlayer}>W</button>
          </div>
          <div style={{"maxHeight": "200px", "overflow": "hidden"}}>
            Other Players:
            {roomData.players.map(player => (
              <p key={player}>{player}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
