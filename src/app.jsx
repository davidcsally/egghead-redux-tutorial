import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import style from './app.css';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
