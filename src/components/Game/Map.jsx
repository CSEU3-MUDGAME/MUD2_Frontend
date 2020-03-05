import React, { useEffect } from "react";
import { StyledMap } from "../../styles/map";
import Player from "./Player";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import coins from "../../assets/icons/coins.png";

export function Map(props) {
  const { player, rooms, getRooms, addScore } = props;

  useEffect(() => {
    getRooms();
  }, []);

return (
    <StyledMap>
      {!rooms ? "Loading" : rooms.map(row => (
        <div className="column">
          {row.map(room => {
            return(
            <div className={`room n-wall-${room.up} s-wall-${room.down} e-wall-${room.right} w-wall-${room.left}`}>
             <>{room.id === player.currentRoom ? <Player /> : null}</>
            </div>)
          })}
        </div>
      ))}
    </StyledMap>
  );
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms.rooms,
    player: state.player
  };
};

export default connect(mapStateToProps, actions)(Map);
