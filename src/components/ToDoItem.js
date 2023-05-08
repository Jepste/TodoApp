import React from "react";

const TodoItem = ({ todo, completeTodo, removeTodo }) => {
  const { id, text, description, user, completed } = todo;

  return (
    <div className={`todo ${completed ? "completed" : ""}`}>
      <h3>{text}</h3>
      {description && <p>{description}</p>}
      <p>Assigned to: {user}</p>
      <button onClick={() => completeTodo(id)}>Complete</button>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
