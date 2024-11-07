import "./global.scss";
import Footer from "./Footer";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container fluid>
          <Row className="position-fixed top-0 w-100">
            <Header />
          </Row>
          <Row>{children}</Row>
          <Row className="position-fixed bottom-0 w-100">
            <Footer />
          </Row>
        </Container>
      </body>
    </html>
  );
}
