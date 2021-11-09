import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
                <Container>
                <Row className='align-items-center'>
                    <Col lg={6} md={6} sm={12} xm={12}>
                        <div className="banner-content">
                            <h4>Exclusive <span>Offer</span> off this week</h4>
                            <h1>WATCHES ARE CRAFTED WITH SCRUPULOUS ATTENTION TO DETAIL</h1>
                            <p>Watch offers a wide assortment of Oyster Perpetual and Cellini watches to suit any wrist. Discover the broad selection of our watches to find a perfect combination of style and functionality</p>
                            <Link>
                                <button>Shop Now</button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xm={12}>
                    <div className="banner-slider">
                            <Carousel fade>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/g98FdYp/8-2-watch-free-download-png.png"
                                alt="First slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/t363jgf/22656-5-rolex-watch-transparent.png"
                                alt="Second slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/3ksWHQp/3-2-watch-png-clipart.png"
                                alt="Third slide"
                            />
                            </Carousel.Item>
                            </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;