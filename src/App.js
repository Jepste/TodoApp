import React, { useState } from 'react';
import './App.css';
import UserSelect from './components/UserSelect';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (todoIndex) => {
    const newTodos = todos.filter((todo, index) => index !== todoIndex);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (todoIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const handleEditTodo = (todoIndex, todoText) => {
    const newTodos = [...todos];
    newTodos[todoIndex].text = todoText;
    setTodos(newTodos);
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Navbar handleShowModal={handleShowModal} />
      <UserSelect
        users={users}
        handleAddUser={handleAddUser}
        handleUserSelect={handleUserSelect}
      />
      {selectedUser && (
        <TodoForm
          handleAddTodo={handleAddTodo}
          selectedUser={selectedUser}
          users={users}
        />
      )}
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <Modal
        showModal={showModal}
        handleHideModal={handleHideModal}
        handleAddUser={handleAddUser}
      />
    </div>
  );
}

export default App;
