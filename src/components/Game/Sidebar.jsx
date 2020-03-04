import React from 'react';
import { StyledSidebar } from '../../styles/sidebar';
import { connect } from "react-redux";
import * as actions from "../../store/actions";

export function Sidebar(props) {
    const { player } = props;
  
    return (
      <StyledSidebar>
        {!player ? (
          "Loading"
        ) : (
            <>
          <div className='game-data'>
              <p>Player: {player.name}</p>
              <p>Room Title: {player.title}</p>
              <p>Room Description: {player.description}</p>
          </div>
          <div className='controls'>
            <button id="n">N</button>
            <button id="s">S</button>
            <button id="e">E</button>
            <button id="w">W</button>
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