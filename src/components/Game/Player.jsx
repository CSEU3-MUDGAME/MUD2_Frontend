import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import robot from "../../assets/sprites/robot.png"

export function Player(props) {
    const { player } = props;

    return (
      <>
          <img src={robot} style ={{width: "20px", height: "20px"}} alt="robot" />
      </>
    );
  }
 

  export default connect(state=>state, actions)(Player)    