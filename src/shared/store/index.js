/* global window */
import {applyMiddleware, compose, createStore} from 'redux';
import {persistCombineReducers, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = () => {
  const config      = {key: 'root', storage};
  const rootReducer = persistCombineReducers(config, reducers);
  const middleware  = [thunk];
  const store       = createStore(rootReducer, compose(applyMiddleware(...middleware)));
  const getState    = () => {
    store.getState();
  };
  const persistor   = persistStore(store, null, getState);

  return {persistor, store};
};

export default configureStore;
