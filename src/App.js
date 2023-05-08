import React, { useState } from "react";
import "./App.css";
import Todos from "./components/todos";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Redux", completed: false },
    { id: 3, title: "Build a project", completed: false }
  ]);

  const [showModal, setShowModal] = useState(false);

  const addTodo = title => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Modal show={showModal} close={closeModalHandler}>
          <AddTodo addTodo={addTodo} closeModal={closeModalHandler} />
        </Modal>
        <Todos todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        <button className="btn btn-primary btn-block" onClick={showModalHandler}>
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default App;
