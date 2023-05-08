import React, { useState } from "react";

function UserForm(props) {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onClose();
    // Add new user to list of users
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleInputChange} />
        </label>
        <button type="submit">Add</button>
        <button onClick={props.onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default UserForm;
