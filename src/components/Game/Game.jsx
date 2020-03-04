import React from "react";
import Sidebar from './Sidebar';
import Map from "./Map";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { StyledGameWrapper } from '../../styles/game';

function Game(props) {
  return (
    <StyledGameWrapper>
      <Map />
      <Sidebar/>
    </StyledGameWrapper>
  );
}
export default connect(state=>state, actions)(Game)