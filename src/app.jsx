import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import style from './app.css';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import {getTodos} from '../lib/todoServices';
import Message from './components/message.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message message='hello there!' />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
