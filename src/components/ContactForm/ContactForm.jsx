import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [validated, setValidated] = useState(false);
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');
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
            const newMessage = {
                contactName: contactName,
                contactEmail: contactEmail,
                contactMessage: contactMessage
            };
            try {
                await axios.post('/api/kontakt', newMessage);
            } catch (error) {
                console.log(error)
            }
            navigate('/poslano');
        }
    };

    return (
        <>
            <Container className='contact-form-div my-5 p-4'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column' >
                    <Form.Group className='' controlId='contactName'>
                        <Form.Label>Ime i prezime</Form.Label>
                        <Form.Control type='text' name='contactName' required maxLength={50} onChange={(event) => {
                            setContactName(event.target.value)
                        }} />
                        <Form.Control.Feedback type="invalid">Molimo upišite Vaše ime i prezime</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-3' controlId='contactEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='contactEmail' required maxLength={50} onChange={(event) => {
                            setContactEmail(event.target.value)
                        }} />
                        <Form.Control.Feedback type="invalid">Molimo upišite Vašu email adresu u formatu email@email.com</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-3' controlId='contactMessage'>
                        <Form.Label>Opis</Form.Label>
                        <Form.Control as='textarea' rows={5} name='contactMessage' required className='text-area' maxLength={1000} onChange={(event) => {
                            setContactMessage(event.target.value)
                        }} />
                        <Form.Control.Feedback type="invalid">Molimo upišite razlog kontaktiranja</Form.Control.Feedback>
                    </Form.Group>
                    <Button type='submit' className='mt-4 mx-auto btn-about-us btn btn-success'>
                        POŠALJI
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default ContactForm