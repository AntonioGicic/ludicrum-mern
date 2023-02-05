import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './publishform.css';
import CityArray from '../CityArray/CityArray';
import { useNavigate } from 'react-router-dom';

const Publishform = () => {
    const [validated, setValidated] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventCity, setEventCity] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventStartDate, setEventStartDate] = useState('');
    const [eventEndDate, setEventEndDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventEmail, setEventEmail] = useState('');
    const [eventConfirmed, setEventConfirmed] = useState(Boolean);
    const navigate = useNavigate();

    const todayDate = new Date().toISOString().split("T")[0];

    useEffect(() => {
        if (eventEndDate === '') {
            setEventEndDate(eventStartDate)
        }
    })

    const handleSubmit = async (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            if (eventEndDate === '') {
                setEventEndDate(eventStartDate)
            }
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            // eslint-disable-next-line
            const newEvent = {
                title: eventTitle,
                city: eventCity,
                category: eventCategory,
                dateStart: eventStartDate,
                dateEnd: eventEndDate,
                location: eventLocation,
                description: eventDescription,
                email: eventEmail,
                confirmed: eventConfirmed
            };
            try {
                await axios.post('/api/dogadaji', newEvent);

            } catch (error) {
                console.log(error)
            }
            navigate('/objavljeno');
        }
    };

    // get city data
    const pullData = (data) => {
        setEventCity(data)
        return data
    }

    // set end date 
    const setEnd = (end) => {
        setEventEndDate(end)
    }

    // set start date
    const [selectedStart, setSelectedStart] = useState('');
    const startDateChange = (e) => {
        const start = e.target.value;
        setSelectedStart(start);
        setEventStartDate(e.target.value)
    }


    return (
        <>
            <Container className='my-5 mx-auto p-4 contact-form-div publish-form'>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column'  >

                    {/* title */}
                    <Form.Group controlId='publishTitle'>
                        <Form.Label>Naziv događaja</Form.Label>
                        <Form.Control type='text' name='event[title]' required maxLength={50} onChange={(event) => {
                            setEventTitle(event.target.value)
                        }} />
                        <Form.Control.Feedback type='invalid'>Molimo upišite naziv događaja</Form.Control.Feedback>
                    </Form.Group>

                    {/* city */}
                    <Form.Group className='mt-3' controlId='publishCity'>
                        <Form.Label>Grad, općina ili naselje</Form.Label>
                        <CityArray func={pullData} as={<Form.Control type='text' />} />
                        <Form.Control.Feedback type='invalid'>Molimo odaberite grad ili općinu</Form.Control.Feedback>
                    </Form.Group>

                    {/* location */}
                    <Form.Group className='mt-3' controlId='publishLocation'>
                        <Form.Label>Točna lokacija</Form.Label>
                        <Form.Control type='text' name='event[location]' required maxLength={100} onChange={(event) => {
                            setEventLocation(event.target.value)
                        }} />
                        <Form.Control.Feedback type='invalid'>Molimo upišite adresu ili opis lokacije</Form.Control.Feedback>
                    </Form.Group>

                    {/* multiple checkbox */}
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

                    {/* start date */}
                    <Form.Group className='mt-3' controlId='publishStartDate'>
                        <Form.Label>Datum početka</Form.Label>
                        <Form.Control type='date' min={todayDate} onChange={startDateChange} required name='event[dateStart]' />
                        <Form.Control.Feedback type="invalid">Molimo odaberite datum početka održavanja događaja.</Form.Control.Feedback>
                    </Form.Group>

                    {/* end date */}
                    {multiple ? <EndDate min={selectedStart} function={setEnd} /> : <Form.Control type='date' name='event[dateEnd]' hidden defaultValue={selectedStart} />}

                    {/* category */}
                    <Form.Group className='mt-3'>
                        <Form.Label >Kategorija</Form.Label>
                        <Form.Select name='event[category]' required aria-label='publishCategory' defaultValue='' onChange={(event) => {
                            setEventCategory(event.target.value)
                        }}>
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

                    {/* description */}
                    <Form.Group className='mt-3' controlId='publishDescription'>
                        <Form.Label>Opis</Form.Label>
                        <Form.Control as='textarea' name='event[description]' required className='pub-description' rows={5} onChange={(event) => {
                            setEventDescription(event.target.value)
                        }} />
                        <Form.Control.Feedback type='invalid'>Molimo upišite detalje događaja</Form.Control.Feedback>
                    </Form.Group>

                    {/* email */}
                    <Form.Group className='mt-3' controlId='publishEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='event[email]' type='email' required onChange={(event) => {
                            setEventEmail(event.target.value)
                        }} />
                        <Form.Control.Feedback type='invalid'>Molimo upišite vašu email adresu</Form.Control.Feedback>
                    </Form.Group>

                    {/* confirmation checkbox */}
                    <Form.Group className='mt-3' controlId='publishConfirmation'>
                        <Form.Check
                            type='checkbox'
                            label='Pročitao/la sam i slažem se sa Uvjetima korištenja i pravilima privatnosti'
                            name='event[confirmed]'
                            value='true'
                            required
                            onChange={(event) => {
                                setEventConfirmed(true)
                            }}
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

const EndDate = (props) => {
    const [isStartSelected, setIsStartSelected] = useState('');


    useEffect(() => {
        if (props.min === '') {
            const minimumToday = new Date().toISOString().split("T")[0];
            setIsStartSelected(minimumToday);
        } else {
            const selectedStartDate = new Date(props.min);
            const minimumFirst = new Date(selectedStartDate.getTime() + 86400000);
            const minimumOther = minimumFirst.toISOString().split("T")[0];
            setIsStartSelected(minimumOther)
        }
    }, [props.min]);

    return (
        <Form.Group className='mt-3' controlId='publishEndDate'>
            <Form.Label>Datum završetka</Form.Label>
            <Form.Control type='date' min={isStartSelected} required name='event[dateEnd]' onChange={(e) => { props.function(e.target.value) }} />
            <Form.Control.Feedback type="invalid">Molimo odaberite datum završetka održavanja događaja.</Form.Control.Feedback>
        </Form.Group>
    )
};

export default Publishform