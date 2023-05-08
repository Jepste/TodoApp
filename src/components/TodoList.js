import React, { Component } from 'react';

class TodoList extends Component {
  handleClick = () => {
    this.props.deleteTodoItem(this.props.todo.id);
  };

  render() {
    return (
      <div className='todo-list'>
        <span>{this.props.todo.title}</span>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

export default TodoList;
