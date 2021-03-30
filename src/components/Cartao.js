import React from 'react'
import {Container, Row, Col, Image,} from 'react-bootstrap';
import cartao from '../assets/credit-card.jpg';
import './Cartao.scss';
// import post1 from '../assets/post-1.jpg';
// import post2 from '../assets/post-2.jpg';
// import post3 from '../assets/post-3.jpg';

// import posts from '../data/posts';

const Cartao = () => (
  <section className="mr-auto">
  
  <Container className='my-5'>
   <Row>
     
     <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
      <Row>
        <h2 className='display-4 my-4'>Cartão de crédito</h2>
      </Row>
      
      <Row>
        <Col xs={12} lg={6} className='mb-4'>
          <Row>
            {/* className='d-flex justify-content-center' */}
            <Col xs={2}> <i class="fas fa-credit-card"> </i></Col>
            <Col xs={10} className='h5 text-muted p-0'>Crédito Pessoal</Col>
          </Row>
        </Col>

        <Col xs={12} lg={6} className='mb-4'>
           <Row>
            <Col xs={2}> <i class="fas fa-shopping-cart"></i> </Col>
            <Col xs={10} className='h5 text-muted p-0'>Pagamento Online</Col>
          </Row>
        </Col>          

         <Col xs={12} lg={6} className='mb-4'>
           <Row>
            <Col xs={2}> <i class="fas fa-mobile"></i> </Col>
            <Col xs={10} className='h5 text-muted p-0'>APP</Col>
          </Row>
        </Col>  

         <Col xs={12} lg={6} className='mb-4'>
           <Row>
            <Col xs={2}> <i class="fas fa-wallet"></i> </Col>
            <Col xs={10} className='h5 text-muted p-0'>Carteira Digital</Col>
          </Row>
        </Col> 

      </Row>
     </Col>
     
     <Col xs={12} lg={5}>
       <Image src={cartao} alt='Magbank' fluid/>
     </Col>
   </Row>

  </Container>
</section>
)

export default Cartao
