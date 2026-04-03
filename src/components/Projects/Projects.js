import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agroApp from "../../Assets/Projects/Agro-app.png";
import edumaniax from "../../Assets/Projects/Edumaniax.png";
import fairlySettled from "../../Assets/Projects/FairlySettled.png";
import invoicely from "../../Assets/Projects/Invoicely.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agroApp}
              isBlog={false}
              title="Agro App — Microservices Platform"
              description="Architected a monorepo microservices system with dedicated API Gateway, Auth, and Chatbot services —enabling independent scaling and clean service boundaries. Designed type-safe backend using Express + Prisma ORM with PostgreSQL."
              ghLink="https://github.com/AnujYelve"
              demoLink="https://agro-gray-delta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edumaniax}
              isBlog={false}
              title="Edumaniax — EdTech Platform"
              description="Owned full-stack development of a live production EdTech platform at Agility AI. Designed REST APIs, managed schema with Prisma ORM, and shipped to production. Implemented multi-role auth with JWT-based access control."
              ghLink="https://github.com/AnujYelve/Edumaniax"
              demoLink="https://edumaniax.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fairlySettled}
              isBlog={false}
              title="FairlySettled"
              description="A legal-tech platform built for a software startup with chatbot legal assistance, document drafting, summarization, and a lawyer marketplace with role-based access. Built with React, Node.js + Express, and Firebase."
              ghLink="https://github.com/AnujYelve"
              demoLink="https://fairlysettled.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoicely}
              isBlog={false}
              title="Invoicely"
              description="A microservice project for the backend with 4+ services built to help make invoices for products and maintain inventory."
              ghLink="https://github.com/AnujYelve"
              demoLink="https://www.agilityaiinvoicely.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
