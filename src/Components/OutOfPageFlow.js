import React, { useState } from 'react';

function OutOfPageFlow() {

    // Navigation button click and navigation visibility effect
        const [navigation, setNavigation] = useState(false);
        const toggleNavigation = () => {
            if (navigation) {
                setNavigation(false);
            } else {
                setNavigation(true);
            }
        };
    // Navigation button scroll effect
        const [scrollUp, setScrollUp] = useState(true);
        let prevScrollPos = window.pageYOffset;
        window.addEventListener("scroll", () => {
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos < (window.innerHeight / 2)) {
                setScrollUp(true);
            } else if (prevScrollPos > currentScrollPos) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
            prevScrollPos = currentScrollPos;
        });
    

    return <>
        <div className="background-color"></div>

        {/* Navigation trigger button */}
        <div className={(scrollUp) ? "navigation-trigger" : "navigation-trigger navigation-hidden"} onClick={toggleNavigation}>
            <div className={(navigation) ? "nav-icon open" : "nav-icon"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        {/* NAVIGATION */}
        {navigation &&
            <nav className="navigation">
                <div>
                    <a href="index.html#home" onClick={toggleNavigation}>Home</a>
                    <a href="index.html#about" onClick={toggleNavigation}>About</a>
                    <a href="index.html#services" onClick={toggleNavigation}>Services</a>
                    <a href="index.html#skills" onClick={toggleNavigation}>Skills</a>
                    <a href="index.html#references" onClick={toggleNavigation}>References</a>
                    <a href="index.html#contact" onClick={toggleNavigation}>Contact</a>
                </div>
                <p>Navigation</p>
            </nav>
        }
    </>;
}

export default OutOfPageFlow;
