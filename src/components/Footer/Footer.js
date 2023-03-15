import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Footer = () => {
  return (
    <Navbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
      <Container>
        <Nav className="mx-auto" style={{ fontSize: "1.3rem", gap: "2rem" }}>
          <Navbar.Brand style={{ color: "black" }}>
            &copy;{new Date().getFullYear()} Copyright: EasyTracker
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
