import React, { useState } from 'react';
import './multipleCheckbox.css';
import Form from 'react-bootstrap/Form';

function MultipleCheckbox() {
    const [multiple, setMultiple] = useState(false);
    const todayDate = new Date().toISOString().split("T")[0];

    return (
        <div>
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
                <Form.Control type='date' min={todayDate} required name='event[dateStart]' />
                <Form.Control.Feedback type="invalid">Molimo odaberite datum početka održavanja događaja.</Form.Control.Feedback>
            </Form.Group>
            {multiple ? <EndDate /> : ''}
        </div>
    )
};

const EndDate = () => {
    const tomorrowDate = new Date();
    const setTomorrowDate = new Date(tomorrowDate.getTime() + 86400000).toISOString().split("T")[0];

    return (
        <Form.Group className='mt-3' controlId='publishEndDate'>
            <Form.Label>Datum završetka</Form.Label>
            <Form.Control type='date' required min={setTomorrowDate} name='event[dateEnd]' />
            <Form.Control.Feedback type="invalid">Molimo odaberite datum završetka održavanja događaja.</Form.Control.Feedback>
        </Form.Group>
    )
};

export default MultipleCheckbox