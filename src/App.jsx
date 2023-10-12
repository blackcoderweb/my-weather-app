import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "./components/Search";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import Container from "react-bootstrap/Container";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { LocationContext } from "./context/location";
import "./App.css";
import { StatusContext } from "./context/status";

function App() {
  //Creando el estado para cambiar el value del LocationContext y del StatusContext provider dinámicamente
  const [location, setLocation] = useState("Mexico");
  const [status, setStatus] = useState("success")

  return (
      <LocationContext.Provider value={{location, setLocation}}>
        <StatusContext.Provider value={{status, setStatus}}>
        <Search />
        <Container fluid style={{ maxWidth: "50rem" }} className="container-main">
          <Hero />
          <Navigation />
        </Container>
        <Footer />
        </StatusContext.Provider>
      </LocationContext.Provider>
  );
}

export default App;
