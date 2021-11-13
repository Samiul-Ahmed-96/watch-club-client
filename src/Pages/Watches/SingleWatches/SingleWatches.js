import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleWatches = ({watch}) => {
    //Destructuring
    const {_id,name,img,price,rating} = watch;
    return (
        <Col lg={4} md={4} sm={12} xs={12}>
            <div className="watchDetails">
                <div className="singleImg">
                <img src={img} alt="watch" />
                </div>
                <h3>{name}</h3>
                <Rating 
                className="my-3"
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                initialRating={rating} readonly>
                </Rating>
                <h2>$ {price}</h2>
                <Link to={`/detailsAndBooking/${_id}`}>
                    <button>Purchase and Details</button>
                </Link>
            </div>
        </Col>
    );
};

export default SingleWatches;