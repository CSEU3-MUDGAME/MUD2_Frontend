import * as types from './types';
import { mockMap } from "../components/Game/mockMap";

const initialState = {
    player: {},
    rooms: mockMap
};

export function playerReducer(state = initialState.player, action){
    switch(action.type){
        case types.MOVE_PLAYER:
            return {...state, player: action.payload }   
        case types.INIT_GAME:
            return {...state, player: action.payload }    
        case types.ADD_SCORE:
            return {...state, score: state.score + action.payload}    
        default:
            return state;
    }
}

export function roomsReducer(state = initialState.rooms, action){
    switch(action.type){
        case types.GET_ROOMS:
            return {...state, rooms: action.payload}
        default:
            return state;
    }
}