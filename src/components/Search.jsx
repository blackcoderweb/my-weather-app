import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { LocationContext } from "../context/location";

export const Search = () => {

  //Creando estado temporal para guardar el resultado del input
  const [inputValue, setInputValue] = useState("")
  //Usando el contexto
  const {location, setLocation} = useContext(LocationContext);
  const handleClick = () => {  
    setLocation(inputValue)
    console.log(location);
  }

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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button variant="outline-info" onClick={handleClick}>Search</Button>
            </Form>
        </Container>
      </Navbar>
    </>
  );
};
