import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



function Header({ onLoginClick, onNavigate }) {
  return (
    <Navbar expand="lg" className="bg-dark shadow-sm px-3 py-2">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand
          href="#"
          className="text-white fw-bold fs-3"
          style={{ letterSpacing: "1px" }}
        >
          <img
            style={{ filter: "invert(1)", height: "40px" }}
            src="https://cdn.prod.website-files.com/658c0214eb231c5e670ffec5/65ddc9a13350d434904e595e_Chefit%20-%20Logo.svg"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
        <Navbar.Collapse id="navbarScroll">
          {/* Menu */}
          <Nav className="me-auto mx-auto">
            <Nav.Link
              className="text-white fs-5 mx-3 fw-semibold"
              onClick={() => onNavigate("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white fs-5 mx-3 fw-semibold"
              onClick={() => onNavigate("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="text-white fs-5 mx-3 fw-semibold"
              onClick={() => onNavigate("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>

          {/* Search & Buttons */}
          <div className="d-flex align-items-center">
            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search recipes..."
                className="me-2 rounded-pill px-3"
                aria-label="Search"
              />
              <Button variant="outline-light" className="rounded-pill px-3">
                <i className="fas fa-search"></i>
              </Button>

            </Form>

            {/* Recipe Box Button */}
            <Button
              variant="pink"
              className="rounded-pill px-4 py-2 fw-semibold shadow me-2"
              style={{ backgroundColor: "#ff4da6", border: "none" }}
              onClick={() => onNavigate("recipebox")}
            >
              Recipe Box
            </Button>

            {/* Login Button */}
            <Button
              variant="danger"
              className="rounded-pill px-4 py-2 fw-semibold shadow"
              onClick={onLoginClick}
            >
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
