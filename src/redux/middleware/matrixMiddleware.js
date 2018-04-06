import { ADD_MOVE } from '../modules/actionTypes';
import miniMax from '../../services/miniMax/miniMax';

const matrixMiddleware = store => next => action => {
    if(action.type === ADD_MOVE) {
        const matrix = store.getState().game.matrix,
              figure = JSON.parse(localStorage.getItem('settings')).figure;
        // store.getState().game.settings.figure ||
        matrix.map((el, i) => {
            if (i === action.id) {
                matrix[i] = action.figure;
                return matrix[i];
            } return matrix[i];
        });
        matrix.map((el, i) => (el === '') && (matrix[i] = i));
        console.log(miniMax(matrix, figure).index);
        matrix.map((el, i) => (typeof el === 'number') && (matrix[i] = ''));
    }
    return next(action);
};

export default matrixMiddleware;