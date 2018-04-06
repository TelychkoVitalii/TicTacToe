// Constants
import { ADD_SETTINGS, ADD_MOVE, CLEAR_MATRIX } from './actionTypes';

// Action Creators
export function addSettings(name, figure, mode) {
    return {
        type: ADD_SETTINGS,
        name, figure, mode
    }
}

export function addMove(id, figure) {
    return {
        type: ADD_MOVE,
        id, figure
    }
}

export function clearMatrix(matrix) {
    return {
        type: CLEAR_MATRIX,
        matrix
    }
}

// Initial State Data
const initialState = {
    settings: {name: '', figure: '', mode: ''},
    matrix: new Array(9).fill(''),
    showWinner: {isActive: false, text: ''},
    summary: {player: 0, ties: 0, computer: 0}
};

// Reducers
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_SETTINGS: {
            return Object.assign({}, state, { settings: {...state.settings} });
        }
        case ADD_MOVE: {
            return Object.assign({}, state, { matrix: [...state.matrix], summary: {...state.summary} });
        }
        case CLEAR_MATRIX: {
            return Object.assign({}, state, { matrix: {...state.matrix} });
        }
        default:
            return state;
    }
}