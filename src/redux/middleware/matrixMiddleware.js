import { ADD_MOVE } from '../modules/actionTypes';
import miniMax from '../../services/miniMax';

const matrixMiddleware = store => next => action => {
    if(action.type === ADD_MOVE) {
        const matrix = store.getState().game.matrix,
              figure = store.getState().game.settings.figure;
        console.log(store.getState().game);
        // console.log(miniMax(matrix, figure));
    }
    return next(action);
};

export default matrixMiddleware;


