import * as types from './types';
import { mockMap } from "../components/Game/mockMap";

const initialState = {
    player: {
        name: "Megan",
        room: 0
    },
    rooms: mockMap
};

export function playerReducer(state = initialState.player, action){
    switch(action.type){
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