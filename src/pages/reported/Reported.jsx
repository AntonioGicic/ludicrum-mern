import React from 'react';
import MailSent from '../contacted/mailSent.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Reported = () => {
    return (
        <Container className='error-container'>
            <Row className='d-flex align-items-center justify-content-center'>
                <Col xs={11} lg={5} className='m-1'>
                    <h1 className='text-center'>Vaša prijava je prosljeđena!</h1>
                    <p className='text-center'>Nakon što naš tim provjeri vašu prijavu poduzet ćemo daljnje korake za rješavanje problema.</p>
                </Col>
                <Col xs={11} lg={5} className='d-flex align-items-center justify-content-center mb-5'>
                    <img src={MailSent} alt='Greška 404' className='broken-img mx-auto rotated-img' />
                </Col>
            </Row>
        </Container>
    )
}

export default Reported