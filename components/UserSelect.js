import React, { useState } from 'react';

function UserSelect(props) {
  const [newUserName, setNewUserName] = useState('');

  const handleAddUser = (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.random(),
      name: newUserName,
    };
    props.onAddUser(newUser);
    setNewUserName('');
  };

  return (
    <div>
      <label htmlFor="user">Assign to:</label>
      <select
        name="user"
        value={props.assignedUser}
        onChange={(event) => props.setAssignedUser(event.target.value)}
        required
      >
        <option value="">Select a user</option>
        {props.users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          value={newUserName}
          onChange={(event) => setNewUserName(event.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserSelect;
