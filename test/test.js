const expect = require('expect');
import reducer from '../src/reducers/todo';

describe('Todo Reducer', () => {
  it('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' });
    expect(result).toBeDefined();
  });

  it('adds a todo', () => {
    const startState = {
      todos: [
        { id: 1, name: 'Create static UI', isComplete: true},
        { id: 2, name: 'Create Initial State', isComplete: false},
        { id: 3, name: 'Use state to render UI', isComplete: false},
      ],
    }

    const expectedState = {
      todos: [
        { id: 1, name: 'Create static UI', isComplete: true},
        { id: 2, name: 'Create Initial State', isComplete: false},
        { id: 3, name: 'Use state to render UI', isComplete: false},
        { id: 4, name: 'Added todo', isComplete: false },
      ],
    }
    const action = { type: 'TODO_ADD', payload: { id: 4, name: 'Added todo', isComplete: false } };
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  });
});
