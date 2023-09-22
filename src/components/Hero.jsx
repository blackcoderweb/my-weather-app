import Card from "react-bootstrap/Card";

export const Hero = () => {
  return (
      <Card className="mt-4" border="info">
      <Card.Header as="h3">Weather in {}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
