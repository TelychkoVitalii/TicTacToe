const ADD_SETTINGS = 'ADD_SETTINGS', ADD_MOVE = 'ADD_MOVE';

export function addSettings(name, figure, mode) {
    return {
        type: ADD_SETTINGS,
        name,
        figure,
        mode
    }
}

export function addMove(figure) {
    return {
        type: ADD_MOVE,
        figure
    }
}

const initialState = {
    settings: {name: '', figure: '', mode: ''},
    matrix: new Array(9).fill('')
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_SETTINGS: {
            return Object.assign({}, state, {
                settings: {name: action.name, figure: action.figure, mode: action.mode}
            })
        }
        case ADD_MOVE: {
            return Object.assign({}, state, {
                matrix: { matrix: 1}
            })
        }
        default:
            return state;
    }
}

