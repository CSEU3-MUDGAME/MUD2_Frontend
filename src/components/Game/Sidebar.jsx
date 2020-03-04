import React from "react";
import { StyledSidebar } from "../../styles/sidebar";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import arrowRight from "../../assets/icons/arrow-right.png";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowUp from "../../assets/icons/arrow-up.png";
import arrowDown from "../../assets/icons/arrow-down.png";

export function Sidebar(props) {
  const { player, movePlayer } = props;

  return (
    <StyledSidebar>
      {!player ? (
        "Loading"
      ) : (
        <>
          <div className="game-data">
            <p>Player: {player.name}</p>
            <p>Room Number: {player.currentRoom}</p>
          </div>
          <div className="controls">
            <div className="row">
              <div className="empty"></div>
              <img src={arrowUp} onClick={() => movePlayer(-1)} alt="up"/>
              <div className="empty"></div>
            </div>
            <div className="row">
              <img src={arrowLeft} onClick={() => movePlayer(-30)} alt="left"/>
              <div className="empty"></div>
              <img src={arrowRight} onClick={() => movePlayer(+30)} alt="right"/>
            </div>
            <div className="row">
              <div className="empty"></div>
              <img src={arrowDown} onClick={() => movePlayer(+1)} alt="down"/>
              <div className="empty"></div>
            </div>
          </div>
          {/* <div className='players'>
            {player.players.map(player => <p key={player}>{player}</p>)}
          </div> */}
        </>
      )}
    </StyledSidebar>
  );
}

export default connect(state => state, actions)(Sidebar);
