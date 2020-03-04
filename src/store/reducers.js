import * as types from './types';

const initialState = {
    player: {
        name: "Megan",
        room: 0
    },
};

export function playerReducer(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}