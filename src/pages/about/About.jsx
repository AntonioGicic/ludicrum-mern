import React from 'react';
import './about.css';
import Container from 'react-bootstrap/Container';
import DownArrow from './downArrow.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Croatia from './Croatia.png';
import Window from './window.jpg';

const About = () => {
    return (
        <div className='home-container gray-color'>
            < Container className='d-flex align-items-center flex-column' >
                <h1 className='text-center fw-bold mt-5 gray-color'>ŠTO JE LUDICRUM?</h1>
                <div className='green-line mx-auto'></div>
                <img src={DownArrow} alt='strelica dolje' className='arrow mx-auto d-block bounce' />
            </Container >
            <Container className='about-main'>
                <Row className='mt-5'>
                    <div className='col-12 col-xl-6 d-flex flex-column order-xl-2 justify-content-center about-mission'>
                        <h3 className='fw-bolder '>NAŠA MISIJA</h3>
                        <div className='green-line'></div>
                        <p>Ludicrum je potpuno besplatna web aplikacija koja služi za objavljivanje i pretragu svih
                            vrsta javnih događaja na teritoriju Republike Hrvatske. Namijenjena je osobama svih uzrasta,
                            od naših najmlađih do najstarijih, te izrađena za brzo i jednostavno korištenje. Uporabom
                            Ludicruma potičemo zaštitu okoliša te smanjujemo nepotrebno korištenje papira i svih vrsta
                            papirnatih oglasa. Molimo Vas, prije korištenja Ludicruma obavezno pročitajte
                            <Link to='/uvjeti-koristenja' className='link-to-terms'> Uvjete korištenja i pravila privatnosti</Link>.</p>
                    </div>
                    <div className='col-12 col-xl-6 d-flex justify-content-center align-items-center'>
                        <img src={Croatia} alt='Slika Hrvatske' className='croatia-image' />
                    </div>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col xl={{ span: 6, order: 12 }} className='d-flex flex-column justify-content-center about-mission'>
                        <h3 className='fw-bolder'>
                            ZAŠTO KORISTITI
                            LUDICRUM?
                        </h3>
                        <div className='green-line'></div>
                        <ul>
                            <li>Jednostavan dizajn omogućava brzo snalaženje i korištenje web aplikacije</li>
                            <li>Sve vrste događaja na jednom mjestu</li>
                            <li>Potpuno besplatna web aplikacija</li>
                            <li>Bez dosadnih reklama</li>
                            <li>Odličan tim ljudi brine se da svaka objava bude vidljiva unutar 24 sata</li>
                        </ul>
                    </Col>
                    <Col xl={{ span: 6, order: 1 }} className='d-flex justify-content-center align-items-center'>
                        <img src={Window} alt='prozor u Hrvatsku' className='window-image' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About