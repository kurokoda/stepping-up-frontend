import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react';
import Routes from './_web/routes';
import App from './_web/views/App';
import config from './config';
import DevTools from './shared/components/devTools';
import Loading from './shared/components/Loading';
import configureStore from './shared/store';

const {persistor, store} = configureStore();

const rootElement = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading/>} persistor={persistor}>
      <Router>
        <App>
          { config.SHOW_DEV_TOOLS && (
            <DevTools/>
          )}
          <Routes/>
        </App>
      </Router>
    </PersistGate>
  </Provider>
);

render(<Root/>, rootElement);
