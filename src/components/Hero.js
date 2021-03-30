import React from 'react';
import {Jumbotron, Button, Image, Container, Row, Col, Img} from 'react-bootstrap';
import logoMobile from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';
import './Hero.scss';

const Hero = () => (
    <Jumbotron className='text-center text-light hero' >
      <Container>
        <Row className='my-lg-5'>
          <Col lg className='text-lg-right my-lg-5'>
            <Image className='d-lg-none' src={logoMobile}/>
            <Image className='d-none d-lg-inline-block' src={logoDesktop}/>
          </Col>
          <Col lg className='text-lg-left my-lg-5'>
            <p>Pague suas contas pelo nosso App.</p>   
            <Button variant="outline-light">Abra sua conta</Button> 
          </Col>
         </Row>
      </Container>
    </Jumbotron>
  );

export default Hero;
