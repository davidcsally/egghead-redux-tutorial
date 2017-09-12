import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import style from './app.css';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import { bindActionCreators } from 'redux';
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

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateCurrent }, dispatch);
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
