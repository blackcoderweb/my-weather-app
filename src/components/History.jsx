import Card from "react-bootstrap/Card";

export const History = () => {
  return (
    <Card className="mt-1" border="info">
      <Card.Header as="h3">Day 1</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
