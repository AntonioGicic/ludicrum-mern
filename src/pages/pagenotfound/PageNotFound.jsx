import React from 'react';
import './PageNotFound.css';
import LogoBroken from '../pagenotfound/LogoBroken.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageNotFound = () => {
    return (
        <Container className='error-container'>
            <Row className='d-flex align-items-center justify-content-center'>
                <Col xs={11} lg={5} className='m-1'>
                    <h1 className='text-center'>Greška 404</h1>
                    <p className='text-center'>Tražena stranica nije pronađena. Molimo pokušajte kasnije.</p>
                </Col>
                <Col xs={11} lg={5} className='d-flex align-items-center justify-content-center mb-5'>
                    <img src={LogoBroken} alt='Greška 404' className='broken-img mx-auto' />
                </Col>
            </Row>
        </Container>
    )
}

export default PageNotFound