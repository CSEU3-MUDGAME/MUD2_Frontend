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
  axiosWithAuth()
    .post("https://adv-team2.herokuapp.com/api/adv/move/", {direction: dir})
    .then(res => {
      console.log(res);
      dispatch({
        type: types.MOVE_PLAYER,
        payload: res.data
       });
    })
    .catch(err => console.log(err));
};

export const getRooms = () => dispatch => {
  axiosWithAuth()
    .get("https://adv-team2.herokuapp.com/api/adv/get_rooms/")
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_ROOMS,
        payload: [res.data]
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
