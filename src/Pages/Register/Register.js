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
        <div className="sectionHeading">
        <h2>Register <span>Here</span></h2>
        </div>
        <Row className="align-items-center gy-3">
                <Col lg={6} md={6} sm={12} xm={12}>
                    <div className="login-content">
                    <img className='w-25 text-center my-3' src="https://i.ibb.co/vDjf20S/add-user.png" alt="" />
                    <div className="login-form">
                    <form onSubmit={handleRegister}>
                    <input type="text"  onBlur={getNameValue} required placeholder="Name"/>
                    <input type="email" onBlur={getEmailValue} required placeholder="Email"/>
                    <input type="password"  onBlur={getPasswordValue} required placeholder="Password"/>
                    <input type="submit" value="Register" placeholder="create"/>
                    </form>
                    </div>
                    </div>
                </Col>
                <Col className="text-center" lg={6} md={6} sm={12} xm={12}>
                    <img className="w-75 rounded-3" src="https://i.ibb.co/n1G0z9r/pexels-the-th-179908.jpg" alt="" />
                </Col>
            </Row>
    </Container>
    );
};

export default Register;




