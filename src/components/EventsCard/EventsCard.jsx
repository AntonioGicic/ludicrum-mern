import React, { useState, useEffect } from 'react';
import './EventsCard.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const EventsCard = ({ eventTitle, eventCategory, eventCity, eventDateEnd, eventDatePublished, eventDateStart, eventDescription, eventId, eventLocation, eventViewNumber }) => {
    const linkToDetails = `/dogadaji/${eventId}`;

    const eventDatePublishedSliced = eventDatePublished.slice(0, 10);
    const eventDateStartSliced = eventDateStart.slice(0, 10);

    const [isMultiple, setIsMultiple] = useState(Boolean);
    useEffect(() => {
        if (eventDateStart === eventDateEnd || eventDateEnd === undefined) {
            setIsMultiple(false)
        } else {
            setIsMultiple(true)
        }
    }, [eventDateStart, eventDateEnd, isMultiple]);

    return (
        <Col xs={12} sm={10} md={6} xl={4}>
            <Card className='event-card card-animation p-3'>
                <Row>
                    <p className='text-center fw-bolder fs-5'>{eventTitle}</p>
                </Row>
                <Row className='green-letters justify-content-center align-items-center'>
                    <Col xs={11} lg={4}>
                        <p className='text-center margin-bottom-small'>{eventCity}</p>
                    </Col>
                    <Col xs={11} lg={4}>
                        <p className='text-center margin-bottom-small'>{eventCategory}</p>
                    </Col>
                    <Col xs={11} lg={4}>
                        <p className='text-center margin-bottom-small'>{eventDateStartSliced}</p>
                        {isMultiple ?
                            <p className='text-center margin-bottom-small'>do<>&#160;</>{eventDateEnd ? eventDateEnd.slice(0, 10)
                                : ''} </p> : ''}
                    </Col>
                </Row>
                <Row>
                    <p className='fw-bolder '>{eventLocation}</p>
                </Row>
                <Row>
                    <p className='card-description'>{eventDescription}</p>
                </Row>
                <Row className='d-flex justify-content-between'>
                    <Col className='text-muted'>
                        <Row>
                            <span>Objavljeno: <span>{eventDatePublishedSliced}</span></span>
                        </Row>
                        <Row>
                            <span>Pregleda: <span>{eventViewNumber}</span></span>
                        </Row>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-end'>
                        <button className='d-flex text-end text-blue details-link
                        justify-content-end align-items-center'>
                            <Link to={linkToDetails} state={{ eventIdLink: { eventId } }} className='link-buttons' >Detalji <>&rarr;</></Link>
                        </button>
                    </Col>
                </Row>
            </Card>
        </Col >
    )
}

export default EventsCard