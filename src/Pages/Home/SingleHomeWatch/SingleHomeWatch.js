import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleHomeWatch.css';

const SingleHomeWatch = ({watch}) => {
    const {_id,name,img,price} = watch;
    return (
        <Col lg={4} md={4} sm={12} xs={12}>
            <div className="watchDetails">
                <img src={img} alt="watch" />
                <h3>{name}</h3>
                <h2>$ {price}</h2>
                <Link to={`/detailsAndBooking/${_id}`}>
                    <button>Purchase and Details</button>
                </Link>
            </div>
        </Col>
    );
};

export default SingleHomeWatch;