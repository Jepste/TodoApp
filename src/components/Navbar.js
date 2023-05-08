import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import UserSelect from "./components/UserSelect";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [showUserSelect, setShowUserSelect] = useState(false);

  const handleAddUserClick = () => {
    setShowUserSelect(true);
  };

  const handleUserSelectClose = () => {
    setShowUserSelect(false);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={handleAddUserClick}>
              Add User
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container mt-3">
        <TodoList />
        <TodoForm />
        <UserSelect show={showUserSelect} handleClose={handleUserSelectClose} />
      </div>
    </div>
  );
}

export default App;
