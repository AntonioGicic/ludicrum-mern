import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMenu = () => {
    return (
        <Navbar expand='lg' sticky='top' className='navbar'>
            <Container>
                <Navbar.Brand as={Link} to='/' className='navbar-brand fw-bold fs-3'><img
                    alt='Logo'
                    src={Logo}
                    width='30'
                    height='30'
                    className='d-inline-block align-top'
                />{' '}
                    LUDICRUM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='navbar-toggler' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/dogadaji' className='mx-4 n-links fw-bolder'>Događaji</Nav.Link>
                        <Nav.Link as={Link} to='/objavi-dogadaj' className='mx-4 n-links fw-bolder' >Objavi</Nav.Link>
                        <Nav.Link as={Link} to='/o-nama' className='mx-4 n-links fw-bolder' >O nama</Nav.Link>
                        <Nav.Link as={Link} to='/kontakt' className='mx-4 n-links fw-bolder' >Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu