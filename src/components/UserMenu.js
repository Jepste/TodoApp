import React, { useState } from "react";
import UserForm from "./UserForm";

function UserMenu(props) {
  const [showForm, setShowForm] = useState(false);

  const handleAddUserClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleAddUserClick}>Add User</button>
      {showForm && <UserForm onClose={handleFormClose} />}
    </div>
  );
}

export default UserMenu;
