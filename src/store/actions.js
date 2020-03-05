import axios from "axios";
import * as types from "./types";
import axiosWithAuth from '../utils/axiosWithAuth';

export const initGame = () => dispatch => {
    axiosWithAuth().get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
    .then(res => {
      console.log(res);
      dispatch({
        type: types.INIT_GAME,
        payload: res.data
      });
    })
    .catch(err =>
        console.log(err)
    );
};

export const movePlayer = (dir) => dispatch => {
    dispatch({
        type: types.MOVE_PLAYER,
        payload: dir 
      })
}

export const getRooms = () => dispatch => {
  dispatch({
    type: types.GET_ROOMS,
  })
}

export const addScore = (amt) => dispatch => {
  dispatch({
    type: types.ADD_SCORE,
    payload: amt 
  })
}