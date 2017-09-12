import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import style from './app.css';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import { updateCurrent } from './reducers/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm
          currentTodo={this.props.currentTodo}
          changeCurrent={this.props.updateCurrent}
        />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}


export default connect(
  (state) => state,
  {updateCurrent}
)(App);
