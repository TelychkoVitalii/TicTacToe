// Constants
export const ADD_SETTINGS = 'ADD_SETTINGS', ADD_MOVE = 'ADD_MOVE', ADD_MOVE_AI = 'ADD_MOVE_AI',
             RESTART_GAME = 'RESTART_GAME', EXIT_GAME = 'EXIT_GAME';

// Action Creators
export function addSettings(name, figure, mode) {
    return {
        type: ADD_SETTINGS,
        payload: {name, figure, mode}
    }
}

export function addMove(id, figure) {
    return {
        type: ADD_MOVE,
        payload: {id, figure}
    }
}

export function addMoveAI(id, figure) {
    return {
        type: ADD_MOVE_AI,
        payload: {id, figure}
    }
}

export function restartGame(matrix) {
    return {
        type: RESTART_GAME,
        payload: {matrix}
    }
}

export function exitGame(matrix, summary) {
    return {
        type: EXIT_GAME,
        payload: {matrix, summary}
    }
}

// Initial State Data
    const initialState = {
        settings: JSON.parse(localStorage.getItem('settings')) || {name: '', figure: '', mode: {human: 'Human', computer: 'Computer'}},
        matrix: JSON.parse(localStorage.getItem('matrix')) || new Array(9).fill(''),
        showWinner: {isActive: false, text: ''},
        summary: JSON.parse(localStorage.getItem('summary')) || {player: 0, ties: 0, computer: 0},
    };

// Reducers
    export default function reducer(state = initialState, action) {
        switch (action.type) {
            case ADD_SETTINGS: {
                return Object.assign({}, state, {settings: {...action.payload}});
            }
            case ADD_MOVE: {
                return Object.assign({}, state, action.payload);
            }
            case ADD_MOVE_AI: {
                return Object.assign({}, state, action.payload);
            }
            case RESTART_GAME: {
                return Object.assign({}, state, {matrix: {...action.payload}});
            }
            case EXIT_GAME: {
                return Object.assign({}, state, action.payload);
            }
            default:
                return state;
        }
    }