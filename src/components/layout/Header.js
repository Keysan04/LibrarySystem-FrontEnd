import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { GiArchiveRegister } from "react-icons/gi";
export const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container>
        <Link className="navbar-brand" to="/">
          CLS
        </Link>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home {FaHome}
            </Link>
            <Link className="nav-link" to="/login">
              {IoMdLogIn} Login
            </Link>
            <Link className="nav-link" to="/signup">
              {GiArchiveRegister}SignUp
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
