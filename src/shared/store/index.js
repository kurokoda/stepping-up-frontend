import {applyMiddleware, compose, createStore} from 'redux';
import {persistCombineReducers, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import api from '../../shared/middlewares/api';
import DevTools from '../components/devTools';
import reducers from '../reducers';


const configureStore = () => {
  const config      = {key: 'root', storage};
  const rootReducer = persistCombineReducers(config, reducers);
  const middleware  = [thunk, api];
  const store       = createStore(rootReducer, compose(applyMiddleware(...middleware), DevTools.instrument()));
  const getState    = () => {
    store.getState();
  };
  const persistor   = persistStore(store, null, getState);
  persistor.purge();
  return {persistor, store};
};

export default configureStore;
