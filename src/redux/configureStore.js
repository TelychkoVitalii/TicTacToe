import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import matrixMiddleware from '../redux/middleware/matrixMiddleware';
import game from './modules/game';

const logger = createLogger({collapsed: true}),
      createStoreWithMiddleware = applyMiddleware(logger, matrixMiddleware)(createStore),
      reducer = combineReducers({ game }),
      configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;

