import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <Container>
            <div className="error-message">
                <h1>404</h1>
                <h1>NOT FOUND</h1>
            </div>
       </Container>
    );
};

export default NotFound;