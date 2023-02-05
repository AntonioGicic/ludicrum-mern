import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './report.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Report = ({ clickToTurnOff, id }) => {
    const [validated, setValidated] = useState(false);
    const [reportReason, setReportReason] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            const newReport = {
                eventId: id,
                razlogPrijaveDogađaja: reportReason,
            };
            try {
                await axios.post(`/api/dogadaji/${id}/reported`, newReport);
            } catch (error) {
                console.log(error)
            }
            navigate('/uspjesna-prijava');
        }
    };

    return (
        <div className='report-container d-flex justify-content-center align-items-center'>
            <Container className='d-flex justify-content-center align-items-center'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='report-form p-3 text-center'>
                    <Row>
                        <Col xs={11}>
                            <p className='fs-4 text-start mb-0'>Odaberite razlog prijave:</p>
                        </Col>
                        <Col xs={1}>
                            <p className='exit-report fs-4 text-end mb-0 fw-bold' onClick={clickToTurnOff}>X</p>
                        </Col>
                    </Row>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='događaj-je-odgođen-ili-otkazan' name='razlogPrijaveDogađaja' onChange={(event) => {
                            setReportReason(event.target.value)
                        }} />
                        <Form.Check.Label>Događaj je odgođen ili otkazan</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='postoji-više-objava-za-isti-događaj' name='razlogPrijaveDogađaja' onChange={(event) => {
                            setReportReason(event.target.value)
                        }} />
                        <Form.Check.Label>Postoji više objava za isti događaj</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='detalji-događaja-nisu-ispravni' name='razlogPrijaveDogađaja' onChange={(event) => {
                            setReportReason(event.target.value)
                        }} />
                        <Form.Check.Label>Detalji događaja nisu ispravni</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='događaj-je-objavljen-bez-potrebnih-dopuštenja-odgovornih-osoba' name='razlogPrijaveDogađaja' onChange={(event) => {
                            setReportReason(event.target.value)
                        }} />
                        <Form.Check.Label>Događaj je objavljen bez dopuštenja odgovornih osoba</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='uvredljivi-sadržaj' name='razlogPrijaveDogađaja' onChange={(event) => {
                            setReportReason(event.target.value)
                        }} />
                        <Form.Check.Label>Uvredljivi sadržaj</Form.Check.Label>
                        <Form.Control.Feedback type="invalid">Potrebno je odabrati jednu od opcija</Form.Control.Feedback>
                    </Form.Check>
                    <Button type='submit' className='mt-3 report-form-button'>
                        PRIJAVI
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Report