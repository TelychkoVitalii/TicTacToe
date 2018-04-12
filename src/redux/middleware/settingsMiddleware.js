import { ADD_SETTINGS } from '../modules/game';

const settingsMiddleware = store => next => action => {
    if(action.type === ADD_SETTINGS) {
        localStorage.setItem('settings', JSON.stringify(action.payload));
    }
    return next(action);
};

export default settingsMiddleware;