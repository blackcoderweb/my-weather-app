import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Search = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container className="justify-content-center">
        <Navbar.Brand href="#home">WeatherNow</Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="The weather in..."
                className="me-2"
                aria-label="The weather in..."
              />
              <Button variant="outline-info">Search</Button>
            </Form>
        </Container>
      </Navbar>
    </>
  );
};
