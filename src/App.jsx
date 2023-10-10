import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "./components/Search";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import Container from "react-bootstrap/Container";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { LocationContext } from "./context";
import "./App.css";

function App() {
  //Creando el estado para cambiar el value del LocationContext.provider dinámicamente
  const [location, setLocation] = useState("Mexico");

  return (
      <LocationContext.Provider value={location}>
        <Search />
        <Container fluid style={{ maxWidth: "50rem" }} className="container-main">
          <Hero />
          <Navigation />
        </Container>
        <Footer />
      </LocationContext.Provider>
  );
}

export default App;
