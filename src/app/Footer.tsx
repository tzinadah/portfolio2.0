import Col from "react-bootstrap/Col";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelopeSquare,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <Col className="bg-dark d-flex justify-content-center p-2 fs-1">
      <Col xs={1}>
        <a
          href="https://www.linkedin.com/in/talal-abuzinadah-196418326"
          target="_blank"
          className="text-primary link"
        >
          <FaLinkedin />
        </a>
      </Col>
      <Col xs={1}>
        <a
          href="https://github.com/tzinadah"
          target="_blank"
          className="text-primary link"
        >
          <FaGithub />
        </a>
      </Col>
      <Col xs={1}>
        <a
          href="mailto:tzinadah@gmail.com"
          target="_blank"
          className="text-primary link"
        >
          <FaEnvelopeSquare />
        </a>
      </Col>
      <Col xs={1}>
        <a href="tel:+447482232425" target="_blank" className="text-primary link">
          <FaPhone />
        </a>
      </Col>
    </Col>
  );
}
