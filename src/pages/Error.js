import { Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <div className="text-center mt-5">
            <h1>An error occured!</h1>
            <p>Could not find this page.</p>
          </div>
        </Row>
      </Container>
    </>
  );
}
