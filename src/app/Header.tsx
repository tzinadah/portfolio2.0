"use client";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar className="bg-dark">
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav>
    </Navbar>
  );
}
