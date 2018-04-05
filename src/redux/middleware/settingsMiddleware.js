import { ADD_SETTINGS } from '../modules/actionTypes';

const settingsMiddleware = store => next => action => {
    if(action.type === ADD_SETTINGS) {
        const settings = store.getState().game.settings;
        settings.name = action.name;
        settings.figure = action.figure;
        settings.mode = action.mode;
        localStorage.setItem('settings', JSON.stringify(settings));
    }
    return next(action);
};

export default settingsMiddleware;