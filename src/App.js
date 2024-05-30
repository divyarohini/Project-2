import React, { useState } from 'react';
import TodoForm from './components/todoform';
import TodoItem from './components/todoitem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newValue } : item))
    );
  };

  return (
    <div className="todo-app">
      <h1>TODO LIST</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default App;