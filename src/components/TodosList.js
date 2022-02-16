import React from 'react';
import PropType from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos, dispatch } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropType.instanceOf(Array).isRequired,
  dispatch: PropType.func.isRequired,
};

export default TodosList;
