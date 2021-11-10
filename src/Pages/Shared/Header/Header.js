import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/Logo.png';
import './Header.css';

const Header = () => {
    const {user,handleSignOut} = useAuth();
    return (
        <Navbar sticky="top" className="header"  collapseOnSelect expand="lg" >
        <Container>
        <Navbar.Brand as={HashLink} to="/home"><img className='w-50' src={logo} alt="Watch-Club" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Link to="/home">Home</Link>
            <HashLink to="/home#HomeWatches">Watches</HashLink>
        </Nav>
        <Nav>
        <li>{user?.displayName}</li>
        {user.email ? 
        <button onClick={handleSignOut}>Sign out <i class="fas fa-sign-out-alt"></i></button>   
        : <Link className='ls-btn' to="/login">Login</Link>}   
            <Link className='ls-btn' to="/register">Register</Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;