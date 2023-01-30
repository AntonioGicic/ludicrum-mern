import React from 'react';
import './contact.css';
import Container from 'react-bootstrap/Container';
import ContactForm from '../../components/ContactForm/ContactForm'

const Contact = () => {
    return (
        <>
            <div className='home-container gray-color p-2'>
                <Container className='contactUs-message mt-5 my-auto d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='text-center fw-bold'>KONTAKTIRAJTE NAS!</h1>
                    <div className='green-line mx-auto'></div>
                    <h2 className='text-center fs-4'>Ukoliko imate bilo kakvih pitanja, pohvala ili prigovora na rad stranice obratite nam se dolje navedenim putem i odgovorit  ćemo Vam u što kraćem vremenu.
                    </h2>
                </Container>
                <ContactForm />
            </div>
        </>
    )
}

export default Contact