import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import store from './store';


const render = () => {
  const state = store.getState();
  ReactDOM.render(<App {...state} />, document.getElementById('content'));
};

render();
store.subscribe(render);

setTimeout(() => {
  store.dispatch({ type: 'TODO_ADD', payload: { id: 4, name: 'New Todo', isComplete: false } });
}, 1000);

registerServiceWorker();
