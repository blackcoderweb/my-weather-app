import Card from 'react-bootstrap/Card';

export const ForecastCard = () => {
  return (
    <Card border="info" style={{ width: '16rem' }} >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Info Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
        </Card.Body>
      </Card>
  )
}
