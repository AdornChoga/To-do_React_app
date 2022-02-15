import React, { useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import ACTIONS from './ACTIONS';
import localData from './localStorage';

const TodoContainer = () => {
  const initialTodos = localData.fetch();
  const reducer = (todos, action) => {
    switch (action.type) {
      case 'toggle-todo':
        return (todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }));
      case 'delete-todo':
        return todos.filter((todo) => todo.id !== action.payload.id);
      case 'add-todo':
        return todos.concat(
          { id: uuidv4(), title: action.payload.title, completed: false },
        );
      case 'update-todo':
        return (todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, title: action.payload.title };
          }
          return todo;
        }));
      default:
        return todos;
    }
  };
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  useEffect(() => {
    localData.update(todos);
  }, [todos]);
  const addToDo = (e, title) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { title } });
    }
  };
  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addToDo={addToDo} />
          <TodosList todos={todos} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
