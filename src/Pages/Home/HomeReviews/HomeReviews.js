import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleHomeReviews from '../SingleHomeReviews/SingleHomeReviews';
import './HomeReviews.css';

const HomeReviews = () => {
    const [homeReviews ,setHomeReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setHomeReviews(data))
    },[])
    return (
       <Container id="homeReviews" className="reviews-container">
       <div className="second-heading text-center">
            <h2>Explore Our Reviews</h2>
            <h3>What Our Client
            <span>Say</span></h3>
        </div>
        <Row className="gx-5 gy-5 p-5">
            {
                homeReviews.map(review => <SingleHomeReviews key={review._id} review={review}></SingleHomeReviews>)
            }
        </Row>
       </Container>
    );
};

export default HomeReviews;