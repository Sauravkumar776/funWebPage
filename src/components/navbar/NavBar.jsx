import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "./navbar.scss";
// ? import OrderTrackingCard from "../orderTracking/OrderTrackingCard";
// ? import Button from "react-bootstrap/esm/Button";
// ? import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <Navbar className="navbar__container" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">AIG DIGITAL HORIZONTAL</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Clients</Nav.Link>
              <Nav.Link href="/orders">Services</Nav.Link>
              <Nav.Link href="#action2">Blogs</Nav.Link>
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/monster-rolodex">Investors</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Careers</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Newsletter</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Contact Us</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Languages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">English</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Spanish</NavDropdown.Item>
                <NavDropdown.Item href="#action5">French</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="dark">Search</Button> */}
            </Form>
            <NavDropdown
              className="signIn_button"
              title="Sign In"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/sign-in">Log In</NavDropdown.Item>
              <NavDropdown.Item href="/sign-up">Sign Up</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <OrderTrackingCard /> */}
    </>
  );
};

export default header;
