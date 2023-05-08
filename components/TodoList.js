import React, { useState } from 'react';

function TodoList(props) {
  const [editableTodo, setEditableTodo] = useState(null);

  const handleRemoveTodo = (todoId) => {
    props.onRemove(todoId);
  };

  const handleEditTodo = (todoId) => {
    setEditableTodo(todoId);
  };

  const handleSaveTodo = (event, todo) => {
    event.preventDefault();
    props.onEdit(todo);
    setEditableTodo(null);
  };

  const handleCompleteTodo = (todoId) => {
    props.onComplete(todoId);
  };

  const handleCancelEdit = () => {
    setEditableTodo(null);
  };

  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          {editableTodo === todo.id ? (
            <form onSubmit={(event) => handleSaveTodo(event, todo)}>
              <input type="text" value={todo.title} onChange={(event) => props.onTitleChange(event.target.value, todo.id)} />
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelEdit}>Cancel</button>
            </form>
          ) : (
            <>
              <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
              <span>Description: {todo.description}</span>
              <span>Assigned to: {todo.assignedTo}</span>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
              <button onClick={() => handleCompleteTodo(todo.id)}>Complete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
