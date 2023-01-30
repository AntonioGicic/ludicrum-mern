import React from 'react';
import Sucessfull from '../published/succesfull.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const published = () => {
    return (
        <Container className='error-container'>
            <Row className='d-flex align-items-center justify-content-center'>
                <Col xs={11} lg={5} className='m-1'>
                    <h1 className='text-center'>Uspješno ste objavili događaj!</h1>
                    <p className='text-center'>Nakon što naš tim provjeri Vašu objavu,
                        događaj će biti vidljiv na stranici "Pregledaj". Provjera može potrajati do 48 sati.</p>
                </Col>
                <Col xs={11} lg={5} className='d-flex align-items-center justify-content-center mb-5'>
                    <img src={Sucessfull} alt='Greška 404' className='broken-img mx-auto' />
                </Col>
            </Row>
        </Container>
    )
}

export default published