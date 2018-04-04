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
            return Object.assign({}, state, {
                settings: {name: action.name, figure: action.figure, mode: action.mode}
            })
        }
        case ADD_MOVE: {
            const matrix = state.matrix;
            return Object.assign({}, state, {
                matrix: [ ...matrix.map((el, i) => {
                    if(i === action.id) {
                        matrix[i] = action.figure;
                        return matrix[i];
                    }
                    return matrix[i];
                }) ]
            })
        }
        default:
            return state;
    }
}