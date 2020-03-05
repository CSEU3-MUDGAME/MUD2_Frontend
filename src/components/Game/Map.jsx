import React, { useEffect } from 'react';
import { StyledMap } from '../../styles/map';
import Player from './Player';
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import coins from "../../assets/icons/coins.png";

export function Map(props) {
  const { player, rooms, getRooms, addScore } = props;

  useEffect(() => {
    getRooms()
  }, [getRooms])

  if (!rooms) {
    return <div>please wait</div>
  } else return <div>hello</div>

  console.log(rooms);

  }

  

  export default connect(state=>state, actions)(Map)  