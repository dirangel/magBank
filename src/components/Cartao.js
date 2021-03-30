import React from 'react'
import {Container, Row, Col, Card, Button, Image, CardDeck} from 'react-bootstrap';
import cartao from '../assets/credit-card.jpg';
import './Cartao.scss';
import post1 from '../assets/post-1.jpg';
import post2 from '../assets/post-2.jpg';
import post3 from '../assets/post-3.jpg';

import posts from '../data/posts';

const Cartao = () => (
  <section className="mr-auto">
  
  <Container className='my-5'>
   <Row>
     <Col className="mr-auto">
     <h1>Cartão de crédito</h1>
     <div class="container">
     <div class="row">
       <div class="col-6 col-sm-4">
         <i class="fas fa-credit-card"></i>
         Crédito Pessoal
       </div>
       
       <div class="col-6 col-sm-4">
         <i class="fas fa-shopping-cart"></i>
         Pagamento Online
       </div>

       <div class="w-100"></div>

      <div class="col-6 col-sm-4">
        <i class="fas fa-mobile"></i>
        APP</div>
      <div class="col-6 col-sm-4">
        <i class="fas fa-wallet"></i>
        Carteira Digital</div>
       </div>
      </div>
     </Col>
     
     <Col>
       <Image src={cartao}/>
     </Col>
   </Row>
  </Container>

  <CardDeck className='my-5'>
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
</CardDeck>

<Row>
    <Col md={{ span: 6, offset: 6 }}>
       <Button variant="success">Abra sua conta</Button>
    </Col>
</Row>

  
</section>
)

export default Cartao
