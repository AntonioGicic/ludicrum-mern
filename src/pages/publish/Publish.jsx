import React from 'react';
import Container from 'react-bootstrap/Container';
import './publish.css';
import PublishForm from '../../components/PublishForm/Publishform'

const Publish = () => {
    return (
        <>
            <Container className='my-auto d-flex align-items-center welcome-message flex-column gray-color mt-5'>
                <h1 className='text-center fw-bold text-wrap'>OBJAVITE NOVI DOGAĐAJ</h1>
                <div className='green-line mx-auto'></div>
                <h2 className='text-center fs-4'>Molimo ispunite potrebne podatke</h2>
            </Container>
            <Container>
                <PublishForm />
            </Container>
        </>
    )
}

export default Publish