import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { bindActionCreators } from 'redux';
import { updateCurrent } from './reducers/todo';
import { Provider } from 'react-redux';

const actions = bindActionCreators({ updateCurrent }, store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App changeCurrent={actions.updateCurrent} />
  </Provider>,
  document.getElementById('content'));

registerServiceWorker();
