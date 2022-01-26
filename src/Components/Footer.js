import React from 'react';

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
                <a href="impressum.html">Impressum</a>
                <a href="datenschutz.html">Datenschutz</a>
                <a href="https://besurelabel.de" target="_blank" rel="noreferrer">Music Label</a>
            </div>
            <a href="#home">Take me to the top!</a>
        </div>
    </footer>
  </>;
}

export default Footer;
