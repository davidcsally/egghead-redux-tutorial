import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {bindActionCreators} from 'redux';
import {updateCurrent} from './reducers/todo';

// const todoChangeHandler = (val) =>
//   store.dispatch(updateCurrent(val));

const actions = bindActionCreators({ updateCurrent }, store.dispatch);

const render = () => {
  const state = store.getState();
  ReactDOM.render(<App todos={state.todos}
    currentTodo={state.currentTodo}
    changeCurrent={actions.updateCurrent}
  />,
  document.getElementById('content'));
};

render();
store.subscribe(render);

registerServiceWorker();
