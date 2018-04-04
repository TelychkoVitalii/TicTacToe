import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import addData from './modules/game';

const logger = createLogger({collapsed: true}),
      createStoreWithMiddleware = applyMiddleware(logger)(createStore),
      reducer = combineReducers({ addData }),
      configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;

