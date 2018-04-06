import { ADD_MOVE, CLEAR_MATRIX } from '../modules/actionTypes';
import miniMax from '../../services/miniMax/miniMax';
import aiPlayerType from '../../services/miniMax/oppositeType';
import showWinnerResults from '../../services/miniMax/showWinnerResults';

const matrixMiddleware = store => next => action => {
    let game = store.getState().game,
        matrix = game.matrix,
        figure = JSON.parse(localStorage.getItem('settings')).figure,
        summary = game.summary,
        showWinner = game.showWinner;

    if(action.type === ADD_MOVE) {
        matrix.map((el, i) => {
            if (i === action.id) {
                matrix[i] = action.figure;
                return matrix[i];
            } return matrix[i];
        });
        matrix.map((el, i) => (el === '') && (matrix[i] = i));
        matrix[miniMax(matrix, figure).index] = aiPlayerType(figure);
        matrix.map((el, i) => (typeof el === 'number') && (matrix[i] = ''));
        const result = showWinnerResults(showWinner, matrix, figure, aiPlayerType(figure));
        if(result === figure) {
            action.player = summary.player++;
        } else if(result === aiPlayerType(figure)) {
            action.computer = summary.computer++;
        } else if(result === null) {
            action.ties = summary.ties++;
        }
        // localStorage.setItem('summary', JSON.stringify(summary));
    }

    if(action.type === CLEAR_MATRIX) {
        showWinner.isActive = false;
        return action.matrix.fill('');
    }
    return next(action);
};

export default matrixMiddleware;