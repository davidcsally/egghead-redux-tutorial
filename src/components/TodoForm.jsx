import React from 'react';
import { connect } from 'react-redux';
import { updateCurrent } from '../reducers/todo';

const TodoForm = (props) => {
  console.log('rendering form');

  const { currentTodo, updateCurrent } = props;
  const handleInputChange = (evt) => {
    const val = evt.target.value;
    updateCurrent(val);
  };

  return (
    <form>
      <input type="text" value={currentTodo} onChange={handleInputChange} />
    </form>
  );
};

export default connect(
  (state) => ({ currentTodo: state.currentTodo }), // map state to props shorthand
  { updateCurrent } // map dispatch to props shorthand
)(TodoForm);
