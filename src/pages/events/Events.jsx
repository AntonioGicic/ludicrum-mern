import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CityArrayQuery from '../../components/CityArrayQuery/CityArrayQuery';
import Button from 'react-bootstrap/Button';
import './events.css';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import EventsCard from '../../components/EventsCard/EventsCard';

const Events = () => {
    const [loading, setLoading] = useState(true);
    const [eventsData, setEventsData] = useState([]);
    const [eventsNumber, setEventsNumber] = useState(Number);
    const [isSortedByDate, setIsSortedByDate] = useState(true);
    const [noQuery, setNoQuery] = useState(Boolean);

    // get today date
    const todayDate = new Date().toISOString().split('T')[0];

    // get pullData city
    const pullData = (data) => {
        return data
    }

    // compare viewNumber function
    function compareViewNumber(a, b) {
        if (a.viewNumber > b.viewNumber) {
            return -1;
        }
        if (a.viewNumber < b.viewNumber) {
            return 1;
        }
        return 0;
    }

    // compare createdAt function
    function compareCreatedAt(a, b) {
        if (a.createdAt > b.createdAt) {
            return -1;
        }
        if (a.createdAt < b.createdAt) {
            return 1;
        }
        return 0;
    }

    // get events data from API function
    async function fetchData() {
        setLoading(true);
        try {
            axios.get('/api/dogadaji').then((response) => {
                if (isSortedByDate) {
                    setEventsData(response.data);
                    setEventsNumber(response.data.length);
                } else {
                    setEventsData(response.data.sort(compareViewNumber));
                    setEventsNumber(response.data.length);
                }
            });
            setNoQuery(true);
            setEventsNumber(eventsData.length);
            setLoading(false);
        } catch {
            console.log('Došlo je do pogreške molimo pokušajte kasnije')
        }
    };

    //get events by query
    async function fetchDataQuery(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const cityQuery = e.target[0].value;
            const dateQuery = e.target[1].value;
            const categoryQuery = e.target[2].value;
            const queryUrl = '/api/dogadaji?city=' + cityQuery + '&date=' + dateQuery + '&category=' + categoryQuery;
            if (cityQuery === '' && dateQuery === '' && categoryQuery === '') {
                setNoQuery(true)
            } else {
                setNoQuery(false);
            }
            axios.get(queryUrl).then((response) => {
                if (isSortedByDate) {
                    setEventsData(response.data);
                    setEventsNumber(response.data.length);
                } else {
                    setEventsData(response.data.sort(compareViewNumber));
                    setEventsNumber(response.data.length);
                }
            });
            setLoading(false);
            e.target[0].value = 'Odaberi grad, općinu ili naselje';
            e.target.reset();
        } catch {
            console.log('Došlo je do pogreške molimo pokušajte kasnije')
        }
    };

    const sortByDate = () => {
        setIsSortedByDate(true);
        eventsData.sort(compareCreatedAt);
    }

    const sortByNumber = () => {
        setIsSortedByDate(false);
        eventsData.sort(compareViewNumber);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Container className='my-auto d-flex align-items-center welcome-message flex-column gray-color mt-5'>
                <h1 className='text-center fw-bold text-wrap search-h1'>Pretražite događaje prema mjestu, datumu i/ili kategoriji</h1>
                <div className='green-line mx-auto'></div>
                {
                    (() => {
                        if (noQuery === true)
                            return <h2 className='text-center fs-6'>Pregledajte deset zadnje dodanih događaja u cijeloj Hrvatskoj ili tražite događaje pomoću tražilice</h2>
                        if (eventsNumber === 0)
                            return <h2 className='text-center fs-6'>Nažalost nismo pronašli događaje za zadani kriterij</h2>
                        else
                            return <h2 className='text-center fs-6' > Pronađenih događaja: <span>{eventsNumber}</span></h2 >
                    })()
                }
            </Container>

            {/* Filtering events */}
            <Container className='filter-box mt-3 mb-3'>
                <Row className='d-flex align-items-center justify-content-center '>
                    <Form onSubmit={fetchDataQuery} className='d-lg-flex align-items-center justify-content-between'>
                        <Col xs={11} lg={3} className='mx-auto my-1'>
                            <Form.Group className='' controlId='filterCity'>
                                <Form.Label>Grad, općina ili naselje</Form.Label>
                                <CityArrayQuery func={pullData} as={<Form.Control type='text' />} />
                            </Form.Group>
                        </Col>
                        <Col xs={11} lg={3} className='mx-auto my-1'>
                            <Form.Group>
                                <Form.Label className=''>Datum</Form.Label>
                                <Form.Control type='date' min={todayDate} name='date' />
                            </Form.Group>
                        </Col>
                        <Col xs={11} lg={3} className='mx-auto my-1'>
                            <Form.Group>
                                <Form.Label className=''>Kategorija</Form.Label>
                                <Form.Select name='category' className='' aria-label='filterCategory'>
                                    <option value=''>Sve kategorije</option>
                                    <option value='Glazba'>Glazba</option>
                                    <option value='Sport'>Sport</option>
                                    <option value='Umjetnost'>Umjetnost</option>
                                    <option value='Edukacija'>Edukacija</option>
                                    <option value='Djeca'>Djeca</option>
                                    <option value='Ostalo'>Ostalo</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={11} lg={2} className='mx-auto my-1 d-flex align-items-center justify-content-center'>
                            <Button type='submit' className='mt-4 mx-auto btn-about-us btn btn-success'>
                                FILTRIRAJ
                            </Button>
                        </Col>
                    </Form>
                </Row>
            </Container>

            {/* Sorting events */}
            <Container className='sorting-box'>
                <Row className='d-flex justify-content-center fs-5'>
                    Sortiraj prema:
                </Row>
                <Row className='d-flex justify-content-center'>
                    <button onClick={sortByDate} className={isSortedByDate ? 'sorting-button m-3 text-wrap text-center sortByDate sorting-disabled' : 'sorting-button m-3 text-wrap text-center sortByDate'}
                        id='sortByDate' >DATUMU
                        OBJAVE</button>
                    <button onClick={sortByNumber} className={isSortedByDate ? 'sorting-button m-3 text-center sortByNumber' : 'sorting-button m-3 text-center sortByNumber sorting-disabled'}
                        id='sortByNumber'>BROJU
                        PREGLEDA</button>
                </Row>
            </Container>

            {/* Events list */}
            <Container className='all-events-box'>
                <Row className='align-items-center test justify-content-center'>
                    {loading && <LoadingSpinner />}
                    {!loading &&
                        eventsData?.map((eachEvent) => (
                            < EventsCard key={eachEvent['_id']} eventId={eachEvent['_id']} eventTitle={eachEvent['title']} eventCategory={eachEvent['category']}
                                eventCity={eachEvent['city']} eventDateEnd={eachEvent['dateEnd']} eventDatePublished={eachEvent['createdAt']}
                                eventDateStart={eachEvent['dateStart']} eventDescription={eachEvent['description']} eventLocation={eachEvent['location']} eventViewNumber={eachEvent['viewNumber']} />
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}



export default Events
