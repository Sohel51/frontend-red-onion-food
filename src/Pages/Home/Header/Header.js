import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.png'
import { FaCartPlus } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className='nav-style'>
                <Container>
                    <Navbar.Brand className='d-flex'>
                        <Link to='/'>
                            <div className="logo">
                                <img alt="" src={Logo} width="65" height="65" className="d-inline-block align-top" />
                            </div>
                        </Link>
                        <div className="font-weight-bold px-2">
                            <span className='text-danger'>RED </span>ONION <br /> <span className='font-weight-normal'>FOODS</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end font-weight-bold">
                        <Nav.Link as={Link} to="/" className='size text-dark'>
                            <FaCartPlus />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" className='text-dark '>
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" className='bg-danger text-white text-center signup'>
                            Sign up
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header