import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {

    const {signInUsingGoogle,setUser ,loginViaEmailAndPassword, setIsLoading} = useAuth();

    const history= useHistory()
    const location = useLocation()

    const url= location.state?.from || "/home"

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
            <Row>
                <Col lg={6} md={6} sm={12} xm={12}>
                    <div className="login-form">
                    <form onSubmit={handleLoginWithEmailAndPassword}>
                    <input type="email" onBlur={handleGetEmail} placeholder="Email"/>
                    <br/>
                    <input type="password" onBlur={handleGetPassword} placeholder="Password"/>
                    <br/>
                    <br/>
                    <input type="submit" value ="login"/>
                    </form>
                    <button onClick={handleGoogleLogin}>Google Login</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;