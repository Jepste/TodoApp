import React from 'react';

const Task = ({ todo, handleRemoveTodo }) => {
  return (
    <li key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <span>Assigned to: {todo.assignedTo}</span>
      <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default Task;
