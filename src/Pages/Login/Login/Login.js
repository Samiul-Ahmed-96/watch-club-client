import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';


const Login = () => {

    const {signInUsingGoogle,setUser ,loginViaEmailAndPassword, setIsLoading,savedUser} = useAuth();
    const history= useHistory()
    const location = useLocation()

    const url= location.state?.from || "/home" ;

    const [email , setEmail]= useState("")
    const [password , setPassword] = useState("")


    const handleGetEmail = (e) =>{
    setEmail(e.target.value);
    }

    const handleGetPassword = (e)=> {
        setPassword(e.target.value);
    }
   
    const handleLoginWithEmailAndPassword=(e)=>{
        e.preventDefault();
        loginViaEmailAndPassword(email,password)
        .then((res) => {
          setIsLoading(true)
            setUser(res.user);
            history.push(url)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          })
          .finally(() => {
            setIsLoading(false)
          })
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
          .then((res) => 
            {
              setIsLoading(true)
              setUser(res.user)
              savedUser(res.user.email,res.user.displayName,"PUT")
              history.push(url)
            }
              )
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoading(false)
          })
      };

    return (
        <Container>
        <div className="sectionHeading">
        <h2>Login <span>Here</span></h2>
        </div>
            <Row className="align-items-center gy-3">
                <Col lg={6} md={6} sm={12} xm={12}>
                    <img className="w-75 rounded-3" src="https://i.ibb.co/Wxqh5C2/pexels-ari-alqadri-1151440.jpg" alt="" />
                </Col>

                <Col lg={6} md={6} sm={12} xm={12}>
                <div className="login-content">
                <img className='w-25 text-center my-3' src="https://i.ibb.co/WsdcZYp/login-1.png" alt="" />
                <div className="login-form">
                <form onSubmit={handleLoginWithEmailAndPassword}>
                    <input type="email" onBlur={handleGetEmail} required placeholder="Email"/>
                    <input type="password" onBlur={handleGetPassword} required placeholder="Password"/>
                    <input type="submit" value ="Login"/>
                    
                </form>
                    <button onClick={handleGoogleLogin}>Google Login</button>
                    <Link to='/register'>New User?</Link>
                </div>
                </div>
            </Col>
            </Row>
        </Container>
    );
};

export default Login;