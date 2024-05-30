import React, { useState } from 'react';

function TodoItem({ todo, completeTodo, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  const handleEdit = () => {
    if (!editInput || /^\s*$/.test(editInput)) {
      return;
    }
    editTodo(todo.id, editInput);
    setIsEditing(false);
  };

  return (
    <div className="todo-row">
      {isEditing ? (
        <input
          type="text"
          value={editInput}
          className="todo-input edit"
          onChange={(e) => setEditInput(e.target.value)}
        />
      ) : (
        <span className={todo.isComplete ? 'completed' : ''} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </span>
      )}
      <div className="icons">
        {isEditing ? (
          <button onClick={handleEdit} className="todo-button edit">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-icon">
            Edit
          </button>
        )}
        <button onClick={() => removeTodo(todo.id)} className="delete-icon">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;