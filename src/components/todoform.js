import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input || /^\s*$/.test(input)) {
      return;
    }
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add item . . ."
        value={input}
        name="text"
        className="todo-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="todo-button">ADD</button>
    </form>
  );
}

export default TodoForm;