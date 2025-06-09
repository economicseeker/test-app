import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jest Testing Demo</h1>
        <Counter />
        <TodoList onAddTodo={handleAddTodo} onRemoveTodo={handleRemoveTodo} />
      </header>
    </div>
  );
}

export default App;
