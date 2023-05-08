import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !user) return;
    const newTodo = {
      id: uuid(),
      text,
      description,
      user,
      completed: false,
    };
    addTodo(newTodo);
    setText("");
    setUser("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Task:</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="user">Assign to:</label>
      <select id="user" value={user} onChange={(e) => setUser(e.target.value)}>
        <option value="">Select user</option>
        <option value="John">John</option>
        <option value="Jane">Jane</option>
        <option value="Bob">Bob</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
