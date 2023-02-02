import React, { useState, useEffect } from 'react';

const Found = (props) => {
    const [eventsFound, setEventsFound] = useState(Boolean);
    const [eventsNum, setEventsNum] = useState();

    useEffect(() => {
        console.log(props)
        setEventsFound(props.noEvents)
        console.log(props.noEvents)
        console.log(eventsFound)
    })

    return (
        <>
            {(props.noEvents === true) ? (<h2 className='text-center fs-6' > Prikazanih događaja: <span>{props.eventsNumber}</span></h2 >) : (<h2 className='text-center fs-6'>Nažalost nismo pronašli događaje za zadani kriterij</h2>)
            }
        </>
    )
}

export default Found