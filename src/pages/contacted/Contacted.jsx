import React from 'react';
import './contacted.css';
import MailSent from '../contacted/mailSent.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contacted = () => {
    return (
        <Container className='error-container'>
            <Row className='d-flex align-items-center justify-content-center'>
                <Col xs={11} lg={5} className='m-1'>
                    <h1 className='text-center'>Uspješno ste nas kontaktirali!</h1>
                    <p className='text-center'>Naš tim će Vam odgovoriti u što kraćemu roku.</p>
                </Col>
                <Col xs={11} lg={5} className='d-flex align-items-center justify-content-center mb-5'>
                    <img src={MailSent} alt='Greška 404' className='broken-img mx-auto rotated-img' />
                </Col>
            </Row>
        </Container>
    )
}

export default Contacted