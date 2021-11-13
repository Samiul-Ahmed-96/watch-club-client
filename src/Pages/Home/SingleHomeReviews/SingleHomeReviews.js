import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';

const SingleHomeReviews = ({review}) => {
    const {name,massage,rating} = review ;
    return (
       <Col className="review-details" md={12} sm={12} xm={12}>
            <h2>{name}</h2>
            <Rating 
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            initialRating={rating} readonly>
            </Rating>
            <p>{massage}</p>
       </Col>
    );
};

export default SingleHomeReviews;