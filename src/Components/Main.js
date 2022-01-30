import React from 'react';
import Navigation from "./Navigation";
import About from './About';
import Contact from './Contact';
import References from './References';
import Services from './Services';
import Skills from './Skills';

function Main() {
    return <>
    <Navigation />
    <main>
        <About />
        <Services />
        <Skills />
        <References />
        <Contact />
    </main>
    </>;
}

export default Main;
