import React from "react";
import { Button, Container, Navbar, Nav, Form } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./assets/logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Markets">Markets</Nav.Link>
              <Nav.Link href="#Governance">Governance</Nav.Link>
              <Nav.Link href="#Prices">Prices</Nav.Link>
              <Nav.Link href="#Docs">Docs</Nav.Link>
              <Nav.Link href="#Hatom">Hatom Token</Nav.Link>

              <Nav.Link href="#light">
                <div>
                  <img
                    src="./assets/brightness.png"
                    style={{
                      width: "15px",
                      height: "15px",
                      float: "left",
                      marginTop: "7px",
                    }}
                  />
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    style={{ float: "left" }}
                  />
                  <img
                    src="./assets/moon.png"
                    style={{
                      width: "15px",
                      height: "15px",
                      float: "left",
                      marginTop: "7px",
                      marginLeft: "-7px",
                    }}
                  />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
