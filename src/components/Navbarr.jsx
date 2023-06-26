/** @format */

import React, { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import taskManagerLogo from "../images/TaskDuty Logo.png";
import profilePhoto from "../images/Profile photo.png";
import { Link } from "react-router-dom";

const Navbarr = () => {
  const [show, setShow] = useState(false);
  const styling = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  };
  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="p-3" collapseOnSelect>
          <Container fluid>
            <Link to="/">
              <img src={taskManagerLogo} alt="" />
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={toggleOffCanvas}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
              onHide={toggleOffCanvas}
            >
              <Offcanvas.Body className="p-4 text-center flex-lg-row-reverse align-items-lg-center gap-3">
                <div className="d-flex justify-content-between justify-content-lg-end flex-row-reverse">
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  <img style={{ width: "50px" }} src={profilePhoto} alt="" />
                </div>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
                  <Link style={styling} to="/create" onClick={toggleOffCanvas}>
                    New Task
                  </Link>
                  <Link style={styling} to="/tasks" onClick={toggleOffCanvas}>
                    All Task
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navbarr;
