import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="todo">Todo app</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive ? "active-link nav-link" : "nav-link"
              }
            >
              Todo
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active-link nav-link" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
