import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const {error,handleEmail,handlePassword,handleLogin,handleResetPassword,signInUsingGoogle} = useFirebase();
    return (
        <Container>
            <h2 className="my-5">Please Login</h2>
            <Row className="align-items-center">
                <Col md={6} sm={12}>
                    <form onSubmit={handleLogin}>
                        <div className="form-item">
                            <img className="w-25" src='' alt="" />
                            <input onBlur={handleEmail} type="email" placeholder="Email" />
                            <input onBlur={handlePassword} type="password" placeholder="Password" />
                            <h3>{error}</h3>
                            <input type="submit" value="Login" />
                            <button onClick={signInUsingGoogle}><i class="fab fa-google"></i> Sign In Using Google</button>
                            <button onClick={handleResetPassword}>Forget Password</button>
                        </div>
                    </form>
                </Col>
                <Col md={6} sm={12}>
                    <img className="w-100 p-5" src='' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;