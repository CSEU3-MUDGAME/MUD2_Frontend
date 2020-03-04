import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../store/actions";

export function Player(props) {
    const { player } = props;

    return (
      <div>
          here
      </div>
    );
  }
 

  export default connect(state=>state, actions)(Player)    