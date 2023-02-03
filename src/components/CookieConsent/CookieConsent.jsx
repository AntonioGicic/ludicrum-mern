import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import '../CookieConsent/CookieConsent.css';
import CookieImg from './cookie.jpg';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
    const [cookies, setCookie] = useCookies();
    const [isFirstVisit, setIsFirstVisit] = useState(Boolean);


    // if exist don't show else show banner
    useEffect(() => {
        if (Object.keys(cookies).length === 0) {
            setIsFirstVisit(true);
        } else {
            setIsFirstVisit(false);
        }
    }, [])

    // button function to create cookie
    const agreeToTerms = () => {
        setIsFirstVisit(false);
        setCookie('first_visit', false, { path: '/', maxAge: 1296000 })
    };

    if (isFirstVisit) {
        return (
            <div className='cookie-background'>
                < div className='cookie-banner' >
                    <div className='cookie-head'>
                        <img src={CookieImg} alt="Kolačić" />
                        <h1 >Kolačići</h1>
                    </div>
                    <p>
                        Ova web stranica koristi kolačiće (eng. cookies) i sličnu tehnologiju kako bi poboljšali Vaše iskustvo i mjerili
                        promet na našoj web stranici. Pritom Vas <b>NE</b> identificiramo. Korištenjem ove web stranice pristajete na
                        našu
                        upotrebu kolačića i naše <Link to='/uvjeti-koristenja' className='cookie-link'>Uvjete korištenja i pravila privatnosti</Link>.
                    </p>
                    <button className='btn-cookie-accept' onClick={agreeToTerms}>Prihvaćam</button>
                </div >
            </div >
        )
    }
}

export default CookieConsent