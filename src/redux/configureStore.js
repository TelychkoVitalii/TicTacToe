import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import matrixMiddleware from '../redux/middleware/matrixMiddleware';
import settingsMiddleware from '../redux/middleware/settingsMiddleware';
import game from './modules/game';
import users from './modules/users';

const logger = createLogger({collapsed: true}),
      createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger, settingsMiddleware, matrixMiddleware)(createStore),
      reducer = combineReducers({ game, users }),
      configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;

