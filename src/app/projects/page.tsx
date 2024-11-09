"use client";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import { Project, projects } from "./projectInfo";

export default function Projects() {
  return (
    <Col className="d-flex flex-column align-items-center text-center">
      <h1 className="text-info fw-bolder my-5">Projects</h1>
      <Row className="w-50 m">
        {projects.map((project: Project, index: number) => (
          <Col xs={12} lg={6} xl={3} key={index}>
            <Card className="bg-dark m-2 z-0">
              <Card.Header className="fw-bold text-primary fs-4">{project.type}</Card.Header>
              <Card.Body>
                <Image src={project.image} alt={project.name} layout="responsive"/>
              </Card.Body>
              <Card.Body>
                <Card.Title className="fw-bold text-primary fs-5">{project.name}</Card.Title>
                <Card.Link href={project.link} target="_blank" className="text-secondary">Visit Site</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
}
