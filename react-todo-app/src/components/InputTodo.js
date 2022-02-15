import React, { useState } from 'react';
import PropType from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const { addToDo } = props;
  const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="form-container">
      <input type="text" className="input-text" placeholder="Add Todo..." value={title} onChange={handleInputChange} />
      <button
        type="submit"
        className="input-submit"
        onClick={(e) => addToDo(e, title)}
      >
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = { addToDo: PropType.func.isRequired };

export default InputTodo;
