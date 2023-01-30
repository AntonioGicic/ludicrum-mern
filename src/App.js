import React from 'react';
import CookieConsent from './components/CookieConsent/CookieConsent';
import NavbarMenu from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import ScrollToTop from './pages/ScrollToTop/ScrollToTop'
import Home from './pages/home/Home';
import Events from './pages/events/Events';
import Details from './pages/Details/details';
import Publish from './pages/publish/Publish';
import About from './pages/about/About';
import TermsOfUse from './pages/termsofuse/TermsOfUse';
import Contact from './pages/contact/Contact';
import Contacted from './pages/contacted/Contacted';
import Reported from './pages/reported/Reported';
import Published from './pages/published/published';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import FooterMenu from './components/Footer/Footer';
import Background from './components/Background/Background';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

function App() {
  return (
    <>
      < BrowserRouter >
        <CookieConsent />
        <ScrollToTop />
        <NavbarMenu />
        <Background />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dogadaji' element={<Events />} />
          <Route path='/dogadaji/:id' element={<Details />} />
          <Route path='/objavi-dogadaj' element={<Publish />} />
          <Route path='/o-nama' element={<About />} />
          <Route path='/uvjeti-koristenja' element={<TermsOfUse />} />
          <Route path='/kontakt' element={<Contact />} />
          <Route path='/objavljeno' element={<Published />} />
          <Route path='/poslano' element={<Contacted />} />
          <Route path='/uspjesna-prijava' element={<Reported />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <FooterMenu />
      </BrowserRouter >
    </>
  );
}

export default App;
