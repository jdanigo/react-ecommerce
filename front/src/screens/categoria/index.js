import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import productos from "../../data/productos.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './categoria.css';
import {Link} from 'react-router-dom';
function Categoria() {
  const dataProducto = productos;
  const tallas = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

  return (
    <Container>
      <Row>
        <Col>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active">
              <Link to={'/'}>
                  Home
                </Link>
              </li>
              <li class="breadcrumb-item active">Categorias</li>
              <li class="breadcrumb-item active" aria-current="page">
                Calzado
              </li>
            </ol>
          </nav>
        </Col>
      </Row>
      <Row className="p-3 border-bottom">
        <Col lg={3}>
          <Container>
            <Row className="mb-2 p-2">
              <Col>
                <h2>CALZADO</h2>
                <span>TODOS ({dataProducto.length})</span>
              </Col>
            </Row>
            <div className="border mt-3 p-2">
            <Row className="mt-2 p-1">
             
             <p>
               <b>TALLA</b>
             </p>
             <div className="tallasbox">
               {tallas.map((data, index) => {
                 return (
                   <button
                     type="button"
                     key={index}
                     className="btn btn-secondary tallasitems btn-xs m-1"
                   >
                     {data}
                   </button>
                 );
               })}
             </div>

         </Row>
         <Row className="mt-2 p-1">
            <p>
               <b>PRECIO</b>
             </p>
             <p>
                 {"$150000 - $300000 (10)"}<br/>
                 {"$300000 - $450000 (24)"}<br/>
             </p>
         </Row>
         <Row className="mt-2 p-1">
            <p>
               <b>MATERIAL</b>
             </p>
             <p>
                 {"CUERO (18)"}<br/>
                 {"NUBUK (8)"}<br/>
             </p>
         </Row>
         <Row className="mt-2 p-1">
            <p>
               <b>COLOR</b>
             </p>
             <p>
                 {"NEGRO (12)"}<br/>
                 {"CAFE (12)"}<br/>
                 {"AZUL (12)"}<br/>
                 {"ORO (12)"}<br/>
             </p>
         </Row>
         <Row className="mt-2 p-1">
            <p>
               <b>TECNOLOGÍA</b>
             </p>
             <p>
                 {"HPO2Flex (5)"}<br/>
                 {"BioBevel (1)"}<br/>
                 {"flexGroove (3)"}<br/>
             </p>
         </Row>

            </div>
            
          </Container>
        </Col>
        <Col lg={9}>
          <Row>
            {dataProducto.map((data, index) => {
              const photo = require(`../../assets/img/${data.foto}`);
              return (
                <Col className="mb-2" key={index} lg={4}>
                  <div className="card no-radius card-product no-borders-bottom">
                    <div className="card-favorite">
                    <button type="button" className="btn btn-default mx-4">
                  <FontAwesomeIcon icon={faHeart} color="gray" size="lg"/>
                  </button>
                    </div>
                    <div className="card-img card-img-box">
                      <Link to={'/producto/'+data.id}>
                      <img className="card-img-element" src={photo} alt="e-commerce" />
                      </Link>
                    </div>
                    <div className="card-title">
                      <div className="text-center">
                        <b>{data.nombre}</b>
                        <p>
                          <h5> &#36;{data.precio}</h5>
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Categoria;
