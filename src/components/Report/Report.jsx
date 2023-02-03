import React, { useState } from 'react';
import './report.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Report = ({ clickToTurnOff, id }) => {
    const currentUrl = window.location.href;
    const reportedUrl = currentUrl + '/reported';

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='report-container d-flex justify-content-center align-items-center'>
            <Container className='d-flex justify-content-center align-items-center'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} action={reportedUrl} method='post' className='report-form p-3 text-center'>
                    <Row>
                        <Col xs={11}>
                            <p className='fs-4 text-start mb-0'>Odaberite razlog prijave:</p>
                        </Col>
                        <Col xs={1}>
                            <p className='exit-report fs-4 text-end mb-0 fw-bold' onClick={clickToTurnOff}>X</p>
                        </Col>
                    </Row>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='događaj-je-odgođen-ili-otkazan' name='razlogPrijaveDogađaja' />
                        <Form.Check.Label>Događaj je odgođen ili otkazan</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='postoji-više-objava-za-isti-događaj' name='razlogPrijaveDogađaja' />
                        <Form.Check.Label>Postoji više objava za isti događaj</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='detalji-događaja-nisu-ispravni' name='razlogPrijaveDogađaja' />
                        <Form.Check.Label>Detalji događaja nisu ispravni</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='događaj-je-objavljen-bez-potrebnih-dopuštenja-odgovornih-osoba' name='razlogPrijaveDogađaja' />
                        <Form.Check.Label>Događaj je objavljen bez dopuštenja odgovornih osoba</Form.Check.Label>
                    </Form.Check>
                    <Form.Check className='my-2 text-start'>
                        <Form.Check.Input required type='radio' value='uvredljivi-sadržaj' name='razlogPrijaveDogađaja' />
                        <Form.Check.Label>Uvredljivi sadržaj</Form.Check.Label>
                        <Form.Control.Feedback type="invalid">Potrebno je odabrati jednu od opcija</Form.Control.Feedback>
                    </Form.Check>
                    <Form.Control type='text' name='eventId' required defaultValue={id._id} hidden />
                    <Button type='submit' className='mt-3 report-form-button'>
                        PRIJAVI
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Report