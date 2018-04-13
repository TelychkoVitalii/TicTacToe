import { ADD_MOVE, RESTART_GAME, EXIT_GAME, ADD_MOVE_AI } from '../modules/game';
import miniMax from '../../services/miniMax/miniMax';
import aiPlayerType from '../../services/miniMax/oppositeType';
import showWinnerResults from '../../services/miniMax/showWinnerResults';

const matrixMiddleware = store => next => action => {

    if(action.type === ADD_MOVE_AI) {
        const matrix = [...store.getState().game.matrix],
              settings = store.getState().game.settings,
              figure = settings.figure;
        matrix.map((el, i) => (el === '') && (matrix[i] = i));
        matrix[4] = aiPlayerType(figure);
        matrix.map((el, i) => (typeof el === 'number') && (matrix[i] = ''));
        action.payload = {matrix};
    }

    if(action.type === ADD_MOVE) {
        const matrix = [ ...store.getState().game.matrix ],
              summary = { ...store.getState().game.summary },
              showWinner = { ...store.getState().game.showWinner },
              { id, figure } = action.payload;

        (matrix[id] === '') && (matrix[id] = figure);
        matrix.map((el, i) => (el === '') && (matrix[i] = i));
        matrix[miniMax(matrix, figure).index] = aiPlayerType(figure);
        matrix.map((el, i) => (typeof el === 'number') && (matrix[i] = ''));

        const result = showWinnerResults(showWinner, matrix, figure, aiPlayerType(figure));
        localStorage.setItem('matrix', JSON.stringify(matrix));

        if(result === figure) {
            summary.player++;
        } else if(result === aiPlayerType(figure)) {
            summary.computer++;
        } else if(result === null) {
            summary.ties++;
        }
        localStorage.setItem('summary', JSON.stringify(summary));
        action.payload = {matrix, summary, showWinner};
    }

    if(action.type === RESTART_GAME) {
        const showWinner = { ...store.getState().game.showWinner },
              matrix = [...store.getState().game.matrix];
        showWinner.isActive = false;
        showWinner.text = '';
        localStorage.removeItem('matrix');
        matrix.fill('');
        action.payload = {matrix};
    }

    if(action.type === EXIT_GAME) {
        const showWinner = { ...store.getState().game.showWinner },
              matrix = [...store.getState().game.matrix];
        showWinner.isActive = false;
        showWinner.text = '';
        action.payload.summary = {player: 0, ties: 0, computer: 0};
        localStorage.removeItem('settings');
        localStorage.removeItem('matrix');
        localStorage.removeItem('summary');
        matrix.fill('');
        action.payload = {matrix};
    }
    return next(action);
};

export default matrixMiddleware;