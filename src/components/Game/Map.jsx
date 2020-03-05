import React, { useEffect } from "react";
import { StyledMap } from "../../styles/map";
import Player from "./Player";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import star from "../../assets/icons/star.png";

export function Map(props) {
  const { player, rooms, getRooms, addScore, initGame } = props;

  useEffect(() => {
    getRooms();
    initGame();
  }, []);

return (
    <StyledMap>
      {!rooms ? "Loading" : rooms.map(row => (
          row.map(room => {
            return(
            <div key={room.id} className={`room n-wall-${room.up} s-wall-${room.down} e-wall-${room.right} w-wall-${room.left}`}>
             <>{room.id === player.roomNo ? <Player /> : null}</>
             {room.items.length > 0 ? <div className="blob"></div> : null}
             {room.game_exit === true ? <img src={star} alt="exit" className="exit"/> : null}
            </div>)
          })
          
      ))}
    </StyledMap>
  );
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms.rooms,
    player: state.player.player
  };
};

export default connect(mapStateToProps, actions)(Map);
