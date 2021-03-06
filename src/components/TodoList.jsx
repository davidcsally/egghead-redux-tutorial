import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, toggleTodo, deleteTodo } from '../reducers/todo';

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <span className='delete-item'>
      <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input type="checkbox"
      checked={isComplete}
      onChange={() => toggleTodo(id)}
    />
    {name}
  </li>
)

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="Todo-list">
        <ul>
          {this.props.todos.map(todo =>
            <TodoItem key={todo.id} 
            toggleTodo={this.props.toggleTodo}
            deleteTodo={this.props.deleteTodo}
            {...todo} />)}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ todos: state.todo.todos }), // map state to props function
  { fetchTodos, toggleTodo, deleteTodo } //dispatch to props
)(TodoList);
