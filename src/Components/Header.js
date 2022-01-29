import React from 'react';

function Header() {
  return <>
    <div className="background-color"></div>
    <header id="top">
        <picture>
            <source srcSet={require("../images/bannerSmall.jpg")} media="(max-width: 850px)" />
            <source srcSet={require("../images/bannerMid.jpg")} media="(max-width: 1600px)" />
            <source srcSet={require("../images/bannerHigh.jpg")} />
            <img src={require("../images/banner.JPG")} alt="Banner of belowsurface.de" />
        </picture>
        <div className="banner">
            <h1>Below Surface Medien</h1>
            <h2>Web-Development · Music Production · Video Editing</h2>
        </div>
    </header>
  </>;
}

export default Header;
