import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { store } from 'App/store';
import { GlobalListenersProvider } from 'App/component';

ReactDOM.render(
  <Provider store={store}>
    <GlobalListenersProvider>
      <App />
    </GlobalListenersProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
