import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Anuj Yelve</span> from <span className="purple">Mumbai, Maharashtra</span>.
            <br />
            <br />
            I’m a performance-driven <span className="purple">Full Stack Developer</span> with hands-on experience building real-world SaaS applications.
            I recently worked at <span className="purple">Agility AI</span>, where I contributed to multiple live products, handling end-to-end development from building responsive frontend interfaces using React to designing scalable backend systems and deploying them on GCP using Docker and CI/CD.
            <br />
            <br />
            I specialize in <span className="purple">React.js, Next.js, Node.js, and PostgreSQL</span>, with strong expertise in REST APIs, <span className="purple">microservices architecture</span>, and secure authentication systems.
            <br />
            <br />
            I am pursuing a <span className="purple">B.Tech in Electronics and Communication Engineering</span> from <span className="purple">IIIT Ranchi</span>.
            <br />
            <br />
            I enjoy solving complex problems and building scalable, high-performance applications with clean and maintainable code. Aside from coding, some other activities I love:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>

            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build high-impact, scalable systems!"{" "}
          </p>
          <footer className="blockquote-footer">Anuj Yelve</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
