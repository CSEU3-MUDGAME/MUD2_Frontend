import axios from "axios";
import * as types from "./types";
import axiosWithAuth from "../utils/axiosWithAuth";

export const initGame = () => dispatch => {
  axiosWithAuth()
    .get("https://adv-team2.herokuapp.com/api/adv/init/")
    .then(res => {
      console.log(res);
      dispatch({
        type: types.INIT_GAME,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const movePlayer = dir => dispatch => {
  dispatch({
    type: types.MOVE_PLAYER,
    payload: dir
  });
};

export const getRooms = () => dispatch => {
  // dispatch({
  //   // axios request for rooms
  //   type: types.GET_ROOMS,
  // })
  axiosWithAuth()
    .get("https://adv-team2.herokuapp.com/api/adv/get_rooms/")
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_ROOMS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addScore = amt => dispatch => {
  dispatch({
    type: types.ADD_SCORE,
    payload: amt
  });
};
