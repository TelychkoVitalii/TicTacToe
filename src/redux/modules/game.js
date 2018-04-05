// Constants
import { ADD_SETTINGS, ADD_MOVE } from './actionTypes';

// Action Creators
export function addSettings(name, figure, mode) {
    return {
        type: ADD_SETTINGS,
        name,
        figure,
        mode
    }
}

export function addMove(id, figure) {
    return {
        type: ADD_MOVE,
        id,
        figure
    }
}

// Initial State Data
const initialState = {
    settings: {name: '', figure: '', mode: ''},
    matrix: new Array(9).fill('')
};

// Reducers
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_SETTINGS: {
            return Object.assign({}, state, { settings: {...state.settings} });
        }
        case ADD_MOVE: {
            return Object.assign({}, state, { matrix: [ ...state.matrix ] });
        }
        default:
            return state;
    }
}