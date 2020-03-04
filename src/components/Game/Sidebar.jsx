import React from 'react';
import { StyledSidebar } from '../../styles/sidebar';
import { connect } from "react-redux";
import * as actions from "../../store/actions";

export function Sidebar(props) {
    const { player, movePlayer } = props;
  
    return (
      <StyledSidebar>
        {!player ? (
          "Loading"
        ) : (
            <>
          <div className='game-data'>
              <p>Player: {player.name}</p>
              <p>Room Number: {player.currentRoom}</p>
          </div>
          <div className='controls'>
            <button id="n" onClick={() => movePlayer(-1)}>N</button>
            <button id="s" onClick={() => movePlayer(+1)}>S</button>
            <button id="e" onClick={() => movePlayer(+30)}>E</button>
            <button id="w"onClick={() => movePlayer(-30)}>W</button>
          </div>
          {/* <div className='players'>
            {player.players.map(player => <p key={player}>{player}</p>)}
          </div> */}
          </>
        )}
      </StyledSidebar>
    );
  }

  export default connect(state=>state, actions)(Sidebar)      