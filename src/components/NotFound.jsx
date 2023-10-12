import Card from 'react-bootstrap/Card';

export const NotFound = () => {
  return (
    <>
    <Card className='my-5'>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Text as="h1" className='text-center'>
          Not matching location found.
        </Card.Text>
      </Card.Body>
    </Card>
  </>
  )
}
