"use client";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar className="bg-dark p-3">
      <Navbar.Brand href="/" className="text-white fw-bold fs-3 bg-primary p-2 rounded-2 ms-2 me-2">TZ</Navbar.Brand>
      <Nav>
        <Nav.Link href="/" className="text-primary hover:text-secondary fw-bold fs-3 ms-2">Home</Nav.Link>
        <Nav.Link href="/projects" className="text-primary fw-bold fs-3 ms-2">Projects</Nav.Link>
      </Nav>
    </Navbar>
  );
}
