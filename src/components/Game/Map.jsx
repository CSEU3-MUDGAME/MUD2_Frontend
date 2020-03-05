import React, { useEffect } from 'react';
import { StyledMap } from '../../styles/map';
import Player from './Player';
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import coins from "../../assets/icons/coins.png";

export function Map(props) {
  const { player, rooms, getRooms, addScore } = props;

  useEffect(() => {
    getRooms()
  }, [getRooms])

  if (!rooms) {
    return <div>please wait</div>
  } else return <div>hello</div>

  console.log(rooms);

  

  }

  

  export default connect(state=>state, actions)(Map)  

  // return (
  //   <StyledMap>
  //       {rooms.map(row => 
  //         <div className="column">
  //           {row.map(room => {
  //           return <div className={`room n-wall-${room.sides.up} s-wall-${room.sides.down} e-wall-${room.sides.right} w-wall-${room.sides.left} wall-l-${room.id < 30} wall-r-${room.id >= 870} wall-t-${room.id % 30 === 0} `}> 
  //             <>{room.id === player.currentRoom.id ? <Player /> : null}</>
  //             <>{room.items.coins === false && room.id !== player.currentRoom.id ? <img src={coins} alt="coins" className="coins"/> : null}</>
  //             {room.items.coins === false && room.id === player.currentRoom.id ? () => addScore(100) : null}
  //            </div>
  //           })}
  //         </div>
  //       )}
  //   </StyledMap>
  // );