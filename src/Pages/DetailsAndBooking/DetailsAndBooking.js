import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const DetailsAndBooking = () => {
    //Get the ID 
    const {id} = useParams();
     //State
     const [singleWatch,setSingleWatch] = useState({})
     //Data load
     useEffect(()=>{
         fetch(`http://localhost:5000/watchItems/${id}`)
         .then(res => res.json())
         .then(data => setSingleWatch(data))
     },[])
    return (
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <div className="Booking-watch">
                        <img src={singleWatch.img} alt="" />
                        <h2>{singleWatch.name}</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailsAndBooking;