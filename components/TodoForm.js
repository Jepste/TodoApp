import React, { useState } from 'react';

function TodoForm(props) {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    const newTodo = {
      id: Math.random(),
      title: newTodoTitle,
      description: newTodoDescription,
      completed: false,
      assignedTo: assignedUser,
    };
    props.onAdd(newTodo);
    setNewTodoTitle('');
    setNewTodoDescription('');
    setAssignedUser('');
    setErrors([]);
  };

  const validate = () => {
    const errors = [];
    if (!newTodoTitle.trim()) {
      errors.push('Title is required.');
    }
    if (!newTodoDescription.trim()) {
      errors.push('Description is required.');
    }
    if (!assignedUser.trim()) {
      errors.push('Assignee is required.');
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <ul className="error-list">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <label htmlFor="title">New task:</label>
      <input
        type="text"
        name="title"
        value={newTodoTitle}
        onChange={(event) => setNewTodoTitle(event.target.value)}
        required
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        value={newTodoDescription}
        onChange={(event) => setNewTodoDescription(event.target.value)}
        required
      />

      <label htmlFor="user">Assign to:</label>
      <select
        name="user"
        value={assignedUser}
        onChange={(event) => setAssignedUser(event.target.value)}
        required
      >
        <option value="">Select a user</option>
        {props.users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;