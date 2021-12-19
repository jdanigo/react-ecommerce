import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import Slider from "react-slick";
import img1 from "../../assets/img/slides/slide1.png";
import img2 from "../../assets/img/slides/slide2.png";
import mujer from "../../assets/img/home/mujer.png";
import hombre from "../../assets/img/home/hombre.png";
import accesorios from "../../assets/img/home/accesorios.png";
import banner from "../../assets/img/home/home-banner.png";
import "./home.css";
import productosJSON from "../../data/productos.json";
import {Link} from 'react-router-dom';
function Home() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    adaptiveHeight: true
  };

  const settingsProducts = {
    dots: false,
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

  const images = [{ url: img1 }, { url: img2 }];
  const productos = productosJSON.slice(0, 10);

  return (
    <>
      <div>
        <Slider {...settings}>
          {images.map((data,index) => {
            return (
              <div key={index}>
                <img src={data.url}  className="img-fluid" alt="e-commerce" />
              </div>
            );
          })}
        </Slider>
      </div>
      <section>
        <Container className="my-5">
          <Row>
            <Col lg={4}>
            <Link to={'/categoria'}>
              <div className="card">
                <img className="card-img" src={mujer} alt="e-commerce"/>
                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                  <h4 className="card-title text-center">MUJER</h4>
                </div>
              </div>
              </Link>
            </Col>
            <Col lg={4}>
            <Link to={'/categoria'}>

              <div className="card">
                <img className="card-img" src={hombre} alt="e-commerce" />
                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                  <h4 className="card-title text-center">HOMBRE</h4>
                </div>
              </div>
              </Link>
            </Col>
            <Col lg={4}>
            <Link to={'/categoria'}>
            <div className="card">
                <img className="card-img" src={accesorios} alt="e-commerce" />
                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                  <h4 className="card-title text-center">ACCESORIOS</h4>
                </div>
              </div>

              </Link>
              
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={12}>
              <Link to={'/categoria'}>
              <div className="card">
                <img className="card-img" src={banner} alt="e-commerce" />
                <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                  <h4 className="card-title text-center">COLECCION</h4>
                </div>
              </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Productos recientes</h2>
            </Col>
          </Row>
          <Row>
            <div>
              <Slider {...settingsProducts}>
                {productos.map((data, index) => {
                  const photo = require(`../../assets/img/${data.foto}`);

                  return (
                    <div key={index}>
                      <Link to={'/producto/'+data.id}>
                      <img src={photo} className="img-fluid" width={200} alt="e-commerce" />
                      </Link>
                      
                    </div>
                  );
                })}
              </Slider>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
