import { ADD_MOVE, RESTART_GAME, EXIT_GAME, ADD_MOVE_AI } from '../modules/game';
import miniMax from '../../services/miniMax/miniMax';
import aiPlayerType from '../../services/miniMax/oppositeType';
import showWinnerResults from '../../services/miniMax/showWinnerResults';

const matrixMiddleware = store => next => action => {
    let { matrix, summary, showWinner, settings } = store.getState().game,
        figure = settings.figure;

    if(action.type === ADD_MOVE_AI) {
        matrix.map((el, i) => (el === '') && (matrix[i] = i));
        matrix[4] = aiPlayerType(figure);
        matrix.map((el, i) => (typeof el === 'number') && (matrix[i] = ''));
    }

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
        localStorage.setItem('matrix', JSON.stringify(matrix));


        if(result === figure) {
            action.player = summary.player++;
        } else if(result === aiPlayerType(figure)) {
            action.computer = summary.computer++;
        } else if(result === null) {
            action.ties = summary.ties++;
        }
        localStorage.setItem('summary', JSON.stringify(summary));
    }

    if(action.type === RESTART_GAME) {
        showWinner.isActive = false;
        showWinner.text = '';
        localStorage.removeItem('matrix');
        return action.matrix.fill('');
    }

    if(action.type === EXIT_GAME) {
        showWinner.isActive = false;
        showWinner.text = '';
        summary.player = 0;
        summary.ties = 0;
        summary.computer = 0;
        localStorage.removeItem('settings');
        localStorage.removeItem('matrix');
        localStorage.removeItem('summary');
        return action.matrix.fill('');
    }
    return next(action);
};

export default matrixMiddleware;