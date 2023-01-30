import React, { useEffect } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PublishImg from './img-publish.jpg';
import FindImg from './img-find.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        fetch('http://localhost:3001/')
            .then(res => res.json())
            .then(
                (result) => { },
            )
    }, [])

    return (
        <div className='home-container'>
            <Container>
                <div id='welcome-message' className='d-flex align-items-center'>
                    <Container className='my-auto'>
                        <h1 className='text-center fw-bold mt-5 gray-color'>DOBRODOŠLI NA LUDICRUM!</h1>
                        <div className='green-line mx-auto'></div>
                        <h2 className='text-center fs-4 gray-color'>Pronađite sve vrste zabavnih događaja u Vašoj blizini ili brzo i jednostavno objavite svoj događaj
                        </h2>
                    </Container>
                </div>
            </Container>
            <Container className='h-auto home-container'>
                <Row className='d-flex justify-content-center home-section-find-publish'>
                    <Col xl={6} className='d-flex align-items-center justify-content-evenly'>
                        <img src={FindImg} alt='Pronađi događaj' className='home-images' />
                    </Col>
                    <Col xl={5} className='mt-5 mt-xl-0 d-flex align-items-center justify-content-evenly'>
                        <div>
                            <h3 className='text-center fs-5 fw-bolder'>Provjerite što se događa u Vašoj blizini!</h3>
                            <p className='text-center fs-5 gray-color'>Dosadno vam je, tražite zabavu ili možda želite vašeg partera
                                iznenaditi
                                odlaskom na neki party?
                                Pregledajte što se događa oko vas klikom na gumb!</p>
                            <button className='btn btn-success mx-auto d-block btn-about-us btn-shakeAndRotate'>
                                <Link to='/dogadaji' className='link-buttons'>PREGLEDAJ</Link></button>
                        </div>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center home-section-find-publish'>
                    <Col xl={6} className='d-flex align-items-center justify-content-evenly order-xl-2'>
                        <img src={PublishImg} alt='Objavi događaj' className='home-images' />
                    </Col>
                    <Col xl={5} className='d-flex align-items-center justify-content-evenly mt-5 mt-xl-0 order-xl-1'>
                        <div>
                            <h3 className='text-center fs-5 fw-bolder'>Objavite vaš događaj potpuno besplatno!</h3>
                            <p className='text-center fs-5 gray-color'>U Vašem klubu nastupa svima omiljeni DJ, organizirate sportski
                                turnir
                                ili možda organizirate umjetničku izložbu?
                                Klikom na gumb jednostavno i brzo objavite događaj na Ludicrum!</p>
                            <button className='btn btn-success mx-auto d-block btn-about-us btn-shakeAndRotate'>
                                <Link to='/objavi-dogadaj' className='link-buttons'>OBJAVI</Link>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='environmental-message'>
                <div className='green-line mx-auto'></div>
                <h2 className='text-center mx-auto fs-3 zoomInAndOut ludicrum-use'>Uporabom Ludicruma potičete <span className='green uppercase'>zaštitu šuma i okoliša </span>
                    smanjujući uporabu
                    promidžbenih plakata.</h2>
                <div className='green-line mx-auto'></div>
            </Container>
            <Container className='mb-5'>
                <h2 className='text-center fs-5 mx-auto mt-5 mb-4 gray-color questions-thanks-complaints'>Nadamo se da uživate u Ludicrumu!
                    Ukoliko imate bilo kakvih pitanja, pohvala ili prigovora na rad stranice  obratite nam se klikom
                    na gumb.
                </h2>
                <button className='btn btn-success mx-auto d-block btn-about-us mb-5'>
                    <Link to='/kontakt' className='contact-button'>KONTAKT</Link>
                </button>
                <div className='green-line mx-auto'></div>
            </Container>
        </div>
    )
}

export default Home
