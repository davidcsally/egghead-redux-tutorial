import React from 'react';
import { connect } from 'react-redux';

const TodoItem = ({id, name, isComplete}) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} />
    {name}
  </li>
);

const TodoList = (props) => console.log('List rendering') || (
  <div className="Todo-list">
    <ul>
      {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  </div>
);

export default connect(
  (state) => ({ todos: state.todos }) // map state to props function
)(TodoList);
