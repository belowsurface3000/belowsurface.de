import React, { useEffect } from 'react';
import About from './About';
import Contact from './Contact';
import References from './References';
import Services from './Services';
import Skills from './Skills';

function Main() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <>
        <About />
        <Services />
        <Skills />
        <References />
        <Contact />
    </>;
}

export default Main;
