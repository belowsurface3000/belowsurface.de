import React, { useState } from 'react';
import { HashRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
    // Navigation hidden on small screens
        const [navigationHidden, setNavigationHidden] = useState(false);
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 1500) {
                setNavigationHidden(true);
            } else {
                setNavigationHidden(false)
            }
        });

    return <>
        <div className="background-color"></div>

        {/* Navigation trigger button */}
        <div className={(scrollUp) ? "navigation-trigger" : "navigation-trigger navigation-button-hidden"} onClick={toggleNavigation}>
            <div className={(navigation) ? "nav-icon open" : "nav-icon"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        {/* NAVIGATION */}
        <nav className={(navigationHidden && !navigation) ? "navigation navigation-hidden" : "navigation"}>
            <div>
                <HashRouter>
                    <HashLink smooth to="#top" onClick={toggleNavigation}>Top</HashLink>
                    <HashLink smooth to="#about" onClick={toggleNavigation}>About</HashLink>
                    <HashLink smooth to="#services" onClick={toggleNavigation}>Services</HashLink>
                    <HashLink smooth to="#skills" onClick={toggleNavigation}>Skills</HashLink>
                    <HashLink smooth to="#references" onClick={toggleNavigation}>References</HashLink>
                    <HashLink smooth to="#contact" onClick={toggleNavigation}>Contact</HashLink>
                </HashRouter>
            </div>
            <p>Navigation</p>
        </nav>
    </>;
}

export default OutOfPageFlow;
