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
          <Row>
            <Header />
          </Row>
          <Row>{children}</Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </body>
    </html>
  );
}
