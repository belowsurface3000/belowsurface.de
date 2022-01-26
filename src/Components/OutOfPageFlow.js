import React from 'react';

function OutOfPageFlow() {
  return <>
    <div className="background-color"></div>

    {/* MOBILE SIDE NAVIGATION TRIGGER BUTTON */}
    <div className="sidenav-trigger">
        <i className="fa fa-bars" aria-hidden="true"></i>
    </div>

    {/* NAVIGATION */}
    <nav className="sidenav">
        <div>
            <a href="index.html#home">Home</a>
            <a href="index.html#about">About</a>
            <a href="index.html#services">Services</a>
            <a href="index.html#skills">Skills</a>
            <a href="index.html#references">References</a>
            <a href="index.html#contact">Contact</a>
        </div>
        <p>Navigation</p>
    </nav>
  </>;
}

export default OutOfPageFlow;
