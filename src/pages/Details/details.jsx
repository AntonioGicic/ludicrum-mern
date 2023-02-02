import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import './details.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Report from '../../components/Report/Report'

const Details = () => {
    const [eventCookies, setEventCookie] = useCookies();
    const [eventDetail, setEventDetail] = useState([]);
    const [isDateStart, setIsDateStart] = useState('');
    const [isDateEnd, setIsDateEnd] = useState();
    const [isDateEndExist, setIsDateEndExist] = useState(Boolean);
    const [publishedDate, setPublishedDate] = useState();
    const [toFacebook, setToFacebook] = useState('');
    const [reportActive, setReportActive] = useState(false);
    const location = useLocation()
    const { eventIdLink } = location.state;
    const eventId = eventIdLink.eventId;

    // get event details function
    async function getEventsDetails() {
        try {
            const getDetails = '/dogadaji/' + eventId;
            axios.get(getDetails).then((response) => {
                setEventDetail(response.data)
                if (response.data) {
                    if (response.data.dateStart === response.data.dateEnd) {
                        setIsDateEndExist(false);
                    } else {
                        setIsDateEndExist(true);
                        setIsDateEnd(response.data.dateEnd.slice(0, 10));
                    }
                    setPublishedDate(response.data.createdAt.slice(0, 10));
                    setIsDateStart(response.data.dateStart.slice(0, 10));
                }
            });
        } catch (err) {
            console.error(err);
        }
    };

    //set facebook button
    function toFacebookFunction() {
        const thisUrl = window.location.href;
        setToFacebook('https://www.facebook.com/share.php?u=' + thisUrl)
    }

    //cookie function
    function checkForCookie() {
        const allCookies = eventCookies;
        if (!allCookies.hasOwnProperty(eventId)) {
            setEventCookie(eventId, true, { path: '/', maxAge: 1296000 })
        }
    }

    useEffect(() => {
        getEventsDetails();
        toFacebookFunction();
        checkForCookie();
    }, []);

    const navigate = useNavigate();

    const copyLink = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl);
        alert('Link je kopiran!');
    };

    function turnOffReport() {
        setReportActive(false)
    }

    return (
        <>
            {reportActive ? <Report clickToTurnOff={turnOffReport} id={eventId} /> : null}
            <Container className='my-auto d-flex align-items-center welcome-message flex-column gray-color mt-5'>
                <h1 className='text-center fw-bold text-wrap search-h1'>Pregledajte detalje o događaju ili
                    ga podijelite na društvenim mrežama</h1>
                <div className='green-line mx-auto'></div>
            </Container>
            <Container className='details-container'>
                <Row>
                    <Col xs={11} xl={8} className='mx-auto mt-1 mb-5'>
                        <div className='details-card ps-2 pe-2' >
                            <Row>
                                <p className='text-center fs-3 mb-1'>{eventDetail['title']}</p>
                            </Row>
                            <Row className='city-date-category ps-5 pe-5 pb-2'>
                                <Col className='d-flex justify-content-center justify-content-lg-start' xs={12} lg={4}>
                                    <p className='mb-1'>Mjesto: {eventDetail['city']}</p>
                                </Col>
                                <Col className='d-flex justify-content-center' xs={12} lg={4}>
                                    <span>Datum:<>&#160;</></span>
                                    <span className='d-flex align-items-start flex-column'>
                                        <span>
                                            {isDateStart}
                                        </span>
                                        {isDateEndExist ? <span>do<>&#160;</>{isDateEnd}</span> : ''}
                                    </span>
                                </Col>
                                <Col className='d-flex justify-content-center justify-content-lg-end' xs={12} lg={4}>
                                    <p className='mb-1'>Kategorija: {eventDetail['category']}</p>
                                </Col>
                            </Row>
                            <Row>
                                <p className='fs-5'>{eventDetail['location']}</p>
                            </Row>
                            <Row>
                                <p className='detail-description'>{eventDetail['description']}</p>
                            </Row>
                            <Row>
                                <Col className='text-muted' xs={12} md={6}>
                                    <p className='mb-0'>Objavljeno:<>&#160;</>{publishedDate}</p>
                                    <p>Pregleda:<>&#160;</>{eventDetail['viewNumber']}</p>
                                </Col>
                                <Col xs={12} md={6} className='d-flex align-items-center justify-content-end'>
                                    <span className='copy-buttons text-center copy-buttons-copy' onClick={copyLink}>Kopiraj link</span>
                                    <a href={toFacebook} target='_blank' rel='noopener noreferrer' className='copy-buttons text-center copy-buttons-facebook'>Podjeli na facebook</a>
                                </Col>
                            </Row>
                            <Row className='mt-2 mb-1'>
                                <Col xs={12} lg={10} className='m-b-null d-flex align-items-center justify-content-center'>
                                    <p className='go-back fs-5' onClick={() => navigate(-1)}>Nazad <>&larr;</></p>
                                </Col>
                                <Col xs={12} lg={2} className='m-b-null d-flex align-items-center justify-content-end'>
                                    <p className='report-button fs-6 pe-3' onClick={() => { setReportActive(true) }}>Prijavi</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Details
