import * as types from './types';
import { mockMap } from "../components/Game/mockMap";

const initialState = {
    player: {
        name: "Megan",
        positionx: 0,
        positiony: 0,
        currentRoom: mockMap[0][0],
        score: 0
    },
    rooms: mockMap
};

export function playerReducer(state = initialState.player, action){
    switch(action.type){
        case types.MOVE_PLAYER:
            if(action.payload === "e" && state.currentRoom.right !== null){
                return {...state, positionx: state.positionx + 1, currentRoom: mockMap[state.positionx + 1][state.positiony]}
            }
            else if(action.payload === "w" && state.currentRoom.left !== null){
                return {...state, positionx: state.positionx - 1, currentRoom: mockMap[state.positionx - 1][state.positiony]}
            }
            else if(action.payload === "s" && state.currentRoom.down !== null){
                return {...state, positiony: state.positiony + 1, currentRoom: mockMap[state.positionx][state.positiony + 1]}
            }
            else if(action.payload === "n" && state.currentRoom.up !== null){
                return {...state, positiony: state.positiony - 1, currentRoom: mockMap[state.positionx][state.positiony - 1]}
            }
            else {
                return state
            }
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