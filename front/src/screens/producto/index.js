/* eslint-disable eqeqeq */
import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import { useParams } from "react-router-dom";
import productos from "../../data/productos.json";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
function Producto() {
  const settingsProducts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };
  const params = useParams();
  const { id } = params;
  const dataProducto = productos.find((data) => data.id == id);
  console.log(dataProducto);
  const photo = require(`../../assets/img/${dataProducto.foto}`);
  const tallas = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];
  const productosLook = productos.slice(0, 5).filter((data) => data.id != id);
  const productosRecomendados = productos
    .slice(6, 10)
    .filter((data) => data.id != id);
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
              <li class="breadcrumb-item active" aria-current="page">
                Producto
              </li>
            </ol>
          </nav>
        </Col>
      </Row>
      <Row className="p-3 border-bottom">
        <Col lg={6}>
          <div className="card no-borders">
            <div className="card-img">
              <img
                className="d-block mx-auto img-fluid"
                src={photo}
                style={{ maxWidth: 400 }}
                alt="e-commerce"
              />
            </div>
            <div className="card-body">
              <Slider {...settingsProducts}>
                {dataProducto.fotos.map((data, index) => {
                  const photo = require(`../../assets/img/${data}`);
                  return (
                    <div key={index}>
                      <img src={photo}  className="img-fluid" width={100} alt="e-commerce" />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card no-borders">
            <div className="card-body">
              <Row className="mb-2">
                <Col>
                  <h3>{dataProducto.nombre}</h3>
                  <p>
                    &#36;{dataProducto.precio}
                    <br />
                    <b>Cod de Producto:</b> {dataProducto.referencia}
                  </p>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <p>
                    <b>COLOR</b>
                  </p>
                  <div className="colorbox">
                    <img alt="e-commerce" width={55} src={photo} />
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <p>
                    <b>TALLAS</b>
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
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <button type="button" className="btn btn-custom">
                    AÑADIR AL CARRITO
                  </button>
                  <button type="button" className="btn btn-default mx-4">
                  <FontAwesomeIcon icon={faHeart} color="gray" size="lg"/>
                  </button>
                  
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-2 border-bottom">
        <Col>
          <h4>
            <b>DETALLES DEL PRODUCTO</b>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Col>
      </Row>
      <Row className="mt-2 mb-2">
        <Col>
          <h4>
            <b>TECNOLOGÍAS</b>
          </h4>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="bg-gray">
            <h4>
              <b>COMPLETA TU LOOK</b>
            </h4>
          </div>
        </Col>
      </Row>
      <Row>
        {productosLook.map((data, index) => {
          const photo = require(`../../assets/img/${data.foto}`);
          return (
            <Col className="mb-2" key={index} lg={3}>
              <div className="card card-product no-borders">
                <div className="card-img card-img-box">
                  <Link to={'/producto/'+data.id}>
                  <img
                    className="card-img-element"
                    src={photo}
                    alt="e-commerce"
                  />
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
                <div className="card-body d-block mx-auto">
                  <button type="button" className="btn btn-custom">
                    AÑADIR AL CARRITO
                  </button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-5">
        <Col>
          <div className="border-bottom">
            <h4>
              <b>PRODUCTOS RECOMENDADOS</b>
            </h4>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        {productosRecomendados.map((data, index) => {
          const photo = require(`../../assets/img/${data.foto}`);
          return (
            <Col className="mb-2" key={index} lg={3}>
              
              <div className="card no-radius card-product no-borders-bottom">
                <div className="card-img card-img-box">
                  <Link to={'/producto/'+data.id}>
                  <img
                    className="card-img-element"
                    src={photo}
                    alt="e-commerce"
                  />
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
    </Container>
  );
}
export default Producto;
