import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return <>
    <footer id="footer">
      <picture>
        <source srcSet={require("../images/bannerSmall.jpg")} media="(max-width: 850px)" />
        <source srcSet={require("../images/bannerMid.jpg")} media="(max-width: 1600px)" />
        <source srcSet={require("../images/bannerHigh.jpg")} />
        <img src={require("../images/banner.JPG")} alt="The belowsurface.de banner" />
      </picture>
        <div className="content">
            <h1>Reached the end!</h1>
            <div className="links">
                <NavLink to="impressum">Impressum</NavLink>
                <p>|</p>
                <NavLink to="main">Main Page</NavLink>
                <p>|</p>
                <NavLink to="datenschutz">Datenschutz</NavLink>
            </div>
        </div>
    </footer>
  </>;
}

export default Footer;
