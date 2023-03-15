import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import Login from "../Login/Login";
import Register from "../Register/Register";

const HeaderBeforeLogin = () => {
  return (
    <div>
      <Navbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
        <Container>
          <Navbar.Brand style={{ fontSize: "1.5rem", gap: "1rem" }}>
            EasyTracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mx-auto"
              style={{ fontSize: "1.3rem", gap: "2rem" }}
            >
              <Nav.Link href="/aboutus" style={{ color: "black" }}>
                About US
              </Nav.Link>
              <Nav.Link href="/login" style={{ color: "black" }}>
                Login
              </Nav.Link>
              <Nav.Link href="/register" style={{ color: "black" }}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default HeaderBeforeLogin;
