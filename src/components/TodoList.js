import React, { useState } from 'react';

const TodoList = ({ onAddTodo, onRemoveTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="todo-list" data-testid="todo-list">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit} data-testid="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          data-testid="todo-input"
        />
        <button type="submit" data-testid="add-todo-button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoList; 