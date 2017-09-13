import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';

/** Wrap app in provider component to give access to the store */
ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('content')
);

registerServiceWorker();
