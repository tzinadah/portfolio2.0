import Col from "react-bootstrap/Col";
import Image from "next/image";
import personalImage from "@/assets/images/personal-image.jpg";

export default function Root() {
  return (
    <>
      <Col
        xs={12}
        md={5}
        className="d-flex justify-content-center align-items-center"
      >
        <Image
          src={personalImage}
          alt="Personal Photo"
          className="img-fluid w-50 rounded-circle border border-5 border-primary"
        />
      </Col>
      <Col
        xs={12}
        md={5}
        className="d-flex flex-column justify-content-between text-center"
      >
        <div className="border border-4 border-primary rounded-pill m-1"></div>
        <h1 className="text-info fw-bold m-1">ABOUT ME</h1>
        <p className="text-white fs-4 text-justify">
          Second-year Artificial Intelligence student with a solid foundation in
          machine learning, full-stack development. Skilled in Python,
          Typescript, and cloud technologies, with experience in building and
          deploying full-stack applications. Actively seeking an internship to
          gain hands-on experience.
        </p>
        <div className="border border-4 border-primary rounded-pill m-2"></div>
      </Col>
    </>
  );
}
