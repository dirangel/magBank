import React from 'react';
import { Container, Card, Button, Image, CardDeck, Row, Col} from 'react-bootstrap';
import './CardList.scss';


const CardList = ({ posts }) => (
    <Container>
       <Row>
        {posts.map(({ id, image, title, excerpt, action}) => (
         <Col xs={12} lg={4} key={id}>
           <Card className='mx-auto my-3'>
              <Card.Img variant="top" src={image}/>
               <Card.Body>
                <Card.Title> {title} </Card.Title>
                 <Card.Text> {excerpt} </Card.Text>
                 <Button variant="danger"> {action} </Button>
                </Card.Body>
              </Card>
         </Col>
        ))};
       </Row>
    </Container>

);

export default CardList


     {/* <CardDeck className='my-5'>
     <Card>
    <Card.Img variant="top" src={post1} />
    <Card.Body>
      <Card.Title>Lorem ipsum dolor sit</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card.Text>
      <Button variant="danger">Peça já</Button>
    </Card.Body>    
  </Card>
  <Card>
    <Card.Img variant="top" src={post2} />
    <Card.Body>
      <Card.Title>Phasellus aget elementum diam</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card.Text>
      <Button variant="danger">Peça já</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={post3} />
    <Card.Body>
      <Card.Title>Fusce tempus</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card.Text>
      <Button variant="danger">Peça já</Button>
    </Card.Body>
  </Card>
</CardDeck> */}
