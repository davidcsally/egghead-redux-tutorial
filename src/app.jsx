import React, { Component } from 'react';
import { render } from 'react-dom';
import style from './app.css';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm
          currentTodo={this.props.currentTodo}
          changeCurrent={this.props.changeCurrent}
        />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

export default App;
