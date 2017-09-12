import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const todoChangeHandler = (val) => store.dispatch({type: 'CURRENT_UPDATE', payload: val });

const render = () => {
  const state = store.getState();
  ReactDOM.render(<App todos={state.todos}
    currentTodo={state.currentTodo}
    changeCurrent={todoChangeHandler}
  />, document.getElementById('content'));
};

render();
store.subscribe(render);

registerServiceWorker();
