import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import UserSelect from './components/UserSelect';

function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleCompleteTodo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleEditTodo = (todoId, newTitle, newDescription, newAssignedUser) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            title: newTitle,
            description: newDescription,
            assignedTo: newAssignedUser,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <UserSelect users={users} onAddUser={handleAddUser} />
      <TodoForm users={users} onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        users={users}
        onRemoveTodo={handleRemoveTodo}
        onCompleteTodo={handleCompleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default App;
