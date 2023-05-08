import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import UserSelect from './components/UserSelect';

function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, name: 'Jesper' },
    { id: 2, name: 'Tom' },
    { id: 3, name: 'Jaber' },
  ]);

  // Load the existing to-do list from local storage, if any
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Function to add a new to-do item to the list
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Function to remove a to-do item from the list
  const handleRemoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  // Save the to-do list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Form to add a new to-do item */}
      <TodoForm 
        users={users} 
        onAddTodo={handleAddTodo} 
      />

      {/* List of to-do items */}
      <TodoList 
        todos={todos} 
        onRemoveTodo={handleRemoveTodo} 
      />

      {/* Select element for assigning users */}
      <UserSelect 
        users={users} 
      />
    </div>
  );
}

export default App;
