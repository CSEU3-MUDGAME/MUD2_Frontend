import React from "react";
import Sidebar from './Sidebar';
import Map from "./Map";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { StyledGameWrapper } from '../../styles/game';

export function Game(props) {
  return (
    <div className="game">

    <StyledGameWrapper>
      <Map />
      <Sidebar/>
    </StyledGameWrapper>
    </div>
  );
}
export default connect(state=>state, actions)(Game)