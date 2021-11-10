import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Register = () => {

    const {signInUsingGoogle,setUser,setIsLoading,setError,handleSignUp,getUserName} = useAuth();

    const [name , setName] =useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    
    const history= useHistory()
    const location = useLocation()

    const url= location.state?.from || "/home"


    const getNameValue=(e)=> {
        console.log(e.target.value);
    setName(e.target.value)
    }

    const getEmailValue=(e)=> {
        console.log(e.target.value);
    setEmail(e.target.value)
    }

    const getPasswordValue=(e)=> {
        console.log(e.target.value);
    setPassword(e.target.value)
    }

    const handleRegister=(e)=> {
        e.preventDefault();
        handleSignUp(email,password)
        .then((res) => {
          setIsLoading(true)
          getUserName(name)
            setUser(res.user)
            history.push(url)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })
          .finally(()=> {
            setIsLoading(false)
          })
    }

    const handleGoogleSignIn = () =>{
        signInUsingGoogle()
        .then(res => {
            setIsLoading(true)
            setUser(res.user)
            history.push(url)
        })
        .catch(err => setError(err))
        .finally(()=>{
            setIsLoading(false)
        })
    }

    return (
        <Container>
        <Row>
            <Col lg={6} md={6} sm={12} xm={12}>
                <div className="sign-in-form">
                <form onSubmit={handleRegister}>
                    <input type="text"  onBlur={getNameValue}placeholder="name"/>
                    <br/>
                    <input type="email" onBlur={getEmailValue} placeholder="email"/>
                    <br/>
                    <input type="password"  onBlur={getPasswordValue} placeholder="password"/>
                    <br/>
                    <input type="submit" placeholder="create"/>
                    <br/>
                </form>
                <button onClick={handleGoogleSignIn}>google</button>
                </div>
            </Col>
        </Row>
    </Container>
    );
};

export default Register;