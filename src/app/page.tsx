import Col from "react-bootstrap/Col";
import Image from "next/image";
import personalImage from "../../assets/images/personal-image.jpg";

export default function Root() {
  return (
    <Col className="d-flex justify-content-center align-items-center">
      <Col xs={10} md={5} className="d-flex justify-content-center align-items-center">
        <Image src={personalImage} alt="Personal Photo" className="img-fluid w-50 rounded-circle border border-2 border-danger"/>
      </Col>
      <Col xs={10} md={5}>
      </Col>
    </Col>
  );
}
