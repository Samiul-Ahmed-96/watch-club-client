import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ExploreFeature.css';

const ExploreFeature = () => {
    const [feature,SetFeature] = useState([   

    ]);

    useEffect(()=>{
        fetch('/feature.json')
        .then(res => res.json())
        .then(data => SetFeature(data))
    },[])
    return (
        <Container id="HomeFeatures" >
            <div className="second-heading text-center">
                <h2>Explore Smart Watch</h2>
                <h3>BUILT-IN APPS IN YOUR
                 <span>WATCH</span></h3>
            </div>
            <Row>
                {
                    feature.map(featureItem => <Col md={12} sm={12} xm={12}>
                        <Row className='feature-container align-items-center '>
                            <Col md={4}>
                                <div className="featureImg text-center my-3">
                                    <img src={featureItem.img} alt="" />
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="feature-details">
                                    <h4>{featureItem.type}</h4>
                                    <h5>{featureItem.detail}</h5>
                                </div>
                            </Col>
                        </Row>
                        </Col>)
                }
            </Row>
        </Container>
    );
};

export default ExploreFeature;