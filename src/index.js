import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const state = store.getState()

ReactDOM.render(<App {...state} />, document.getElementById('content'));
registerServiceWorker();
