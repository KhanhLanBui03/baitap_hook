import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Home from "./pages/Home";
import UserDetail from "./components/UserDetail";
import NotFound from "./pages/NotFound";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-warning">
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
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="fs-5 text-light">🏠 Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="py-4">
        <div className="d-flex justify-content-center">
          <div className="content-wrapper w-100" style={{ maxWidth: "800px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:id" element={<UserDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Container>
    </Router>
  );
}

export default App;
