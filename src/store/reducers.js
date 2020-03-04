import * as types from './types';
import { mockMap } from "../components/Game/mockMap";

const initialState = {
    player: {
        name: "Megan",
        currentRoom: 0
    },
    rooms: mockMap
};

export function playerReducer(state = initialState.player, action){
    switch(action.type){
        case types.MOVE_PLAYER:
            return {...state, currentRoom: state.currentRoom + action.payload}
        default:
            return state;
    }
}

export function roomsReducer(state = initialState.rooms, action){
    switch(action.type){
        default:
            return state;
    }
}