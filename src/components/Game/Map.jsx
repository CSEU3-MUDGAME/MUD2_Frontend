import React, { useEffect } from 'react';
import { StyledMap } from '../../styles/map';
import Player from './Player';
import { connect } from "react-redux";
import * as actions from "../../store/actions";

export function Map(props) {
  const { player, rooms, getRooms } = props;

  useEffect(() => {
    getRooms()
  }, [getRooms])

    return (
      <StyledMap>
          {rooms.map(row => 
            <div className="column">
              {row.map(room => {
              return <div className={`room n-wall-${room.sides.up} s-wall-${room.sides.down} e-wall-${room.sides.right} w-wall-${room.sides.left} wall-l-${room.id < 30} wall-r-${room.id >= 870} wall-t-${room.id % 30 === 0} `}> 
                <>{room.id === player.currentRoom ? <Player /> : null}</>
               </div>
              })}
            </div>
          )}
      </StyledMap>
    );
  }

  export default connect(state=>state, actions)(Map)  