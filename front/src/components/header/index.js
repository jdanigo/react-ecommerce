import React from 'react';
import {Navbar, Container, Row, Col, Nav} from 'react-bootstrap/';
import logo from '../../assets/img/logo.png';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
function Header(){
return(
    <>
    <Container className="mt-3">
    <Row>
          <Col className="logo-container" lg={6}>
              
              <img src={logo} style={{width: '200px'}} alt="e-commerce" />
              
          </Col>
          <Col lg={6} className="search-form">
          <input type="text" className="form-control search-input mb-2" placeholder="Buscar" /><br/>
          <span>ENVIO GRATIS PARA PEDIDOS SUPERIORES A $300.000</span>
          
          </Col>
      </Row>
    </Container>
    <Navbar expand="lg">
  <Container className="border-bottom">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">HOMBRE</Nav.Link>
        <Nav.Link href="#link">MUJER</Nav.Link>
        <Nav.Link href="#link">BLOG</Nav.Link>
        <Nav.Link href="#link">HISTORIA</Nav.Link>
        <Nav.Link href="#link">TIENDAS</Nav.Link>
        
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="#home">
        <FontAwesomeIcon icon={faShoppingBag} />
         <span className="mx-2">CARRITO</span>
         0
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>   
    </>
)
}

export default Header;