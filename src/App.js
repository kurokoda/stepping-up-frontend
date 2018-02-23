import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from './shared/store';
import Routes from './_web/routes';

const {persistor, store} = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            {Routes}
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
