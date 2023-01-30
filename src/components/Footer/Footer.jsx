import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import FacebookLogo from './facebook.png'
import InstagramLogo from './instagram.png'

const FooterMenu = () => {
    return (
        < footer className='footer-menu' >
            <Container>
                <Row>
                    <div className='d-flex my-1 justify-content-center external-link-container'>
                        <a href='https://www.facebook.com/'>
                            <img src={FacebookLogo} alt='Facebook' className='d-inline-block' />
                        </a>
                        <a href='https://www.instagram.com/'>
                            <img src={InstagramLogo} alt='Instagram' className='d-inline-block' />
                        </a>
                    </div>
                </Row>
                <Row>
                    <p className='text-center my-auto terms-of-use-footer'>
                        <Link to='/uvjeti-koristenja'>
                            Uvjeti korištenja i pravila privatnosti
                        </Link >
                    </p>
                </Row>
                <Row>
                    <p className='text-center my-auto rights'>© 2022 Ludicrum.com.hr. Sva prava pridržana.</p>
                </Row>
            </Container>
        </footer >
    )
}

export default FooterMenu