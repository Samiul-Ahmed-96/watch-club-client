import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const {error,handleEmail,handlePassword,handleSignup,handleName} = useFirebase();
    return (
        <Container>
        <Row className="align-items-center">
            <Col md={6} sm={12}>
                <form onSubmit={handleSignup}>
                    <div className="form-item">
                        <img className="w-25" src='' alt="" />
                        <input onBlur={handleName} type="text" placeholder="Your Name" />
                        <input onBlur={handleEmail} type="email" placeholder="Email" />
                        <input onBlur={handlePassword} type="password" placeholder="Password" />
                        <h3>{error}</h3>
                        <input type="submit" value="Submit" />
                        <Link to="/login">
                            <button>Already SignUp?</button>
                        </Link>
                    </div>
                </form>
            </Col>
            <Col md={6} sm={12}>
                <img className="w-100 p-5" src="" alt="" />
            </Col>
        </Row>
    </Container>
    );
};

export default Register;