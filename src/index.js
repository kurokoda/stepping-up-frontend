import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react';
import Routes from './_web/routes';
import HeaderContainer from './_web/views/layout/container/HeaderContainer';
import configureStore from './shared/store';

const {persistor, store} = configureStore();

const rootElement = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <HeaderContainer>
          <Routes/>
        </HeaderContainer>
      </Router>
    </PersistGate>
  </Provider>
);

render(<Root/>, rootElement);
