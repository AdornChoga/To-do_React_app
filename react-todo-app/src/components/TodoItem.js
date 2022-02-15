import React, { useState } from 'react';
import PropType from 'prop-types';
import styles from '../stylesheets/TodoItem.module.css';
import ACTIONS from './ACTIONS';

const TodoItem = (props) => {
  const { todo, dispatch } = props;
  const [editingState, setEditingState] = useState({ editing: false });
  const [title, setTitle] = useState(todo.title);

  const handleEditEvent = () => {
    setEditingState({ editing: true });
  };

  const saveChanges = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id: todo.id, title } });
      setEditingState({ editing: false });
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const viewMode = {};
  const editMode = {};

  if (editingState.editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })}
        />
        <button onClick={() => dispatch({
          type: ACTIONS.DELETE_TODO,
          payload: { id: todo.id },
        })}
        >
          Delete
        </button>
        <span className={todo.completed ? 'true' : 'false'} id="todo-title" onClick={handleEditEvent}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={handleInputChange}
        onKeyDown={saveChanges}
      />
    </li>
  );
};

TodoItem.propTypes = { todo: PropType.instanceOf(Object).isRequired };

export default TodoItem;
