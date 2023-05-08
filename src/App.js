import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'Buy milk' },
      { id: 2, title: 'Walk the dog' },
      { id: 3, title: 'Do laundry' }
    ],
    showModal: false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  deleteTodoItem = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <button onClick={this.toggleModal}>Open Modal</button>
        <Modal showModal={this.state.showModal} onClose={this.toggleModal}>
          This is a modal
        </Modal>
        <Todos todos={this.state.todos} deleteTodoItem={this.deleteTodoItem} />
      </div>
    );
  }
}

export default App;
