import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react';
import Routes from './_web/routes';
import HeaderFooterContainer from './_web/views/layout/container/HeaderFooterContainer';
import DevTools from './shared/components/devTools';
import Loading from './shared/components/Loading';
import config from './shared/config';
import configureStore from './shared/store';

const {persistor, store} = configureStore();

const rootElement = document.getElementById('root');

console.log('base: ', process.env.REACT_APP_REACT_WEB_EXPRESS_API_BASE_URL);

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading/>} persistor={persistor}>
      <Router>
        <HeaderFooterContainer>
          { config.SHOW_DEV_TOOLS && (
            <DevTools/>
          )}
          <Routes/>
        </HeaderFooterContainer>
      </Router>
    </PersistGate>
  </Provider>
);

render(<Root/>, rootElement);
