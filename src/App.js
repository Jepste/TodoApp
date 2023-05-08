import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, name: 'Jesper' },
    { id: 2, name: 'Tom' },
    { id: 3, name: 'Jaber' },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');
  const [assignedUser, setAssignedUser] = useState('');

  // Load the existing to-do list from local storage, if any
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Function to add a new to-do item to the list
  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random(),
      title: newTodoTitle,
      description: newTodoDescription,
      completed: false,
      assignedTo: assignedUser,
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
    setNewTodoDescription('');
    setAssignedUser('');
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
      <form onSubmit={handleAddTodo}>
        <label htmlFor="title">New task:</label>
        <input
          type="text"
          name="title"
          value={newTodoTitle}
          onChange={(event) => setNewTodoTitle(event.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={newTodoDescription}
          onChange={(event) => setNewTodoDescription(event.target.value)}
          required
        />

        <label htmlFor="user">Assign to:</label>
        <select
          name="user"
          value={assignedUser}
          onChange={(event) => setAssignedUser(event.target.value)}
          required
        >
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>

        <button type="submit">Add</button>
      </form>

      {/* List of to-do items */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <span>Description: {todo.description}</span>
            <span>Assigned to: {todo.assignedTo}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
