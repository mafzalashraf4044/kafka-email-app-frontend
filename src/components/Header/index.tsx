import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Email App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse role="navigation">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/">About</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
