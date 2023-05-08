import React from 'react';

function TodoList(props) {
  const handleRemoveTodo = (todoId) => {
    props.onRemove(todoId);
  };

  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <span>Description: {todo.description}</span>
          <span>Assigned to: {todo.assignedTo}</span>
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
