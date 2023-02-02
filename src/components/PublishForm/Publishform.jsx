import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './publishform.css';
import CityArray from '../CityArray/CityArray';

const Publishform = () => {
    const [validated, setValidated] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const todayDate = new Date().toISOString().split("T")[0];

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    // get city data
    const pullData = (data) => {
        return data
    }

    const [selectedStart, setSelectedStart] = useState('');
    const startDateChange = (e) => {
        const start = e.target.value;
        setSelectedStart(start)
    }


    return (
        <>
            <Container className='my-5 mx-auto p-4 contact-form-div publish-form'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column' action='https://ludicrum-mern-backend.onrender.com/dogadaji' method='post' >
                    <Form.Group controlId='publishTitle'>
                        <Form.Label>Naziv događaja</Form.Label>
                        <Form.Control type='text' name='event[title]' required maxLength={50} />
                        <Form.Control.Feedback type='invalid'>Molimo upišite naziv događaja</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-3' controlId='publishCity'>
                        <Form.Label>Grad, općina ili naselje</Form.Label>
                        <CityArray func={pullData} as={<Form.Control type='text' />} />
                        <Form.Control.Feedback type='invalid'>Molimo odaberite grad ili općinu</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-3' controlId='publishLocation'>
                        <Form.Label>Točna lokacija</Form.Label>
                        <Form.Control type='text' name='event[location]' required maxLength={100} />
                        <Form.Control.Feedback type='invalid'>Molimo upišite adresu ili opis lokacije</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-3' controlId='publishMultiple'>
                        <Form.Check
                            type='checkbox'
                            label='Događaj traje nekoliko dana'
                            onClick={(e) => {
                                if (e.target.checked) {
                                    setMultiple(true)
                                } else {
                                    setMultiple(false)
                                }
                            }}
                        />
                    </Form.Group>
                    <Form.Group className='mt-3' controlId='publishStartDate'>
                        <Form.Label>Datum početka</Form.Label>
                        <Form.Control type='date' min={todayDate} onChange={startDateChange} required name='event[dateStart]' />
                        <Form.Control.Feedback type="invalid">Molimo odaberite datum početka održavanja događaja.</Form.Control.Feedback>
                    </Form.Group>

                    {multiple ? <EndDate min={selectedStart} /> : <Form.Control type='date' name='event[dateEnd]' hidden defaultValue={selectedStart} />}

                    <Form.Group className='mt-3'>
                        <Form.Label >Kategorija</Form.Label>
                        <Form.Select name='event[category]' required aria-label='publishCategory' defaultValue=''>
                            <option value=''>Odaberite kategoriju...</option>
                            <option value='Glazba'>Glazba</option>
                            <option value='Sport'>Sport</option>
                            <option value='Umjetnost'>Umjetnost</option>
                            <option value='Edukacija'>Edukacija</option>
                            <option value='Djeca'>Djeca</option>
                            <option value='Ostalo'>Ostalo</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Molimo odaberite kategoriju.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-3' controlId='publishDescription'>
                        <Form.Label>Opis</Form.Label>
                        <Form.Control as='textarea' name='event[description]' required className='pub-description' rows={5} />
                        <Form.Control.Feedback type='invalid'>Molimo upišite detalje događaja</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-3' controlId='publishEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='event[email]' type='email' required />
                        <Form.Control.Feedback type='invalid'>Molimo upišite vašu email adresu</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-3' controlId='publishConfirmation'>
                        <Form.Check
                            type='checkbox'
                            label='Pročitao/la sam i slažem se sa Uvjetima korištenja i pravilima privatnosti'
                            name='event[confirmed]'
                            value='true'
                            required
                        />
                    </Form.Group>
                    <Button type='submit' className='mt-4 mx-auto btn-about-us btn btn-success'>
                        OBJAVI
                    </Button>
                </Form>
            </Container>
        </>
    )
}

const EndDate = (min) => {
    const [isStartSelected, setIsStartSelected] = useState('');
    useEffect(() => {
        const selectedStartDate = new Date(min.min);
        if (selectedStartDate == 'Invalid Date') {
            const minimumToday = new Date().toISOString().split("T")[0];
            setIsStartSelected(minimumToday)
        } else {
            const minimumFirst = new Date(selectedStartDate.getTime() + 86400000);
            const minimumOther = minimumFirst.toISOString().split("T")[0];
            setIsStartSelected(minimumOther)
        }
    }, [min.min]);

    return (
        <Form.Group className='mt-3' controlId='publishEndDate'>
            <Form.Label>Datum završetka</Form.Label>
            <Form.Control type='date' min={isStartSelected} required name='event[dateEnd]' />
            <Form.Control.Feedback type="invalid">Molimo odaberite datum završetka održavanja događaja.</Form.Control.Feedback>
        </Form.Group>
    )
};

export default Publishform
