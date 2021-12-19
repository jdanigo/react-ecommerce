import React from 'react';
import {Navbar, Container, Row, Col, Nav} from 'react-bootstrap/';
import logo from '../../assets/img/logo.png';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
function Header(){
return(
    <>
    <Container className="mt-3">
    <Row>
          <Col className="logo-container" lg={6}>
          <Link className="nav-link" to={'/'}>
          <img src={logo} style={{width: '200px'}} alt="e-commerce" />
        </Link>
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
        <Link className="nav-link" to={'/categoria'}>
        HOMBRE
        </Link>
        <Link className="nav-link" to={'/categoria'}>
        MUJER
        </Link>
        <Link className="nav-link" to={''}>
        BLOG
        </Link>
        <Link className="nav-link" to={''}>
        HISTORIA
        </Link>
        <Link className="nav-link" to={''}>
        TIENDAS
        </Link>
        
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link>
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