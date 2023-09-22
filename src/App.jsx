import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "./components/Search";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import Container from "react-bootstrap/Container";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Search />
      <Container fluid style={{ maxWidth: "50rem" }} className="mb-4">
        <Hero />
        <Navigation />
      </Container>
      <Footer />
    </>
  );
}

export default App;
