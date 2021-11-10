import React from 'react';
import { Col } from 'react-bootstrap';

const SingleHomeWatch = ({watch}) => {
    const {name,img,price} = watch;
    return (
        <Col lg={4} md={4} sm={12} xs={12}>
            <div className="watchDetails">
                <img className='w-100' src={img} alt="watch" />
                <h3>{name}</h3>
                <h2>{price}</h2>
            </div>
        </Col>
    );
};

export default SingleHomeWatch;