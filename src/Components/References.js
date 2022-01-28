import React, { useState } from 'react';

function References() {

    const slider1 = [
        {   image: require("../images/references/web/besure1.jpg"), 
            alt: "Be Sure website screenshot",
            link: "https://besurelabel.de",
            text: "Be Sure Label Website"
        },
        {   image: require("../images/references/web/besure2.jpg"),
            alt: "Be Sure website screenshot",
            link: "https://besurelabel.de",
            text: "Be Sure Label Website"
        },
        {   image: require("../images/references/web/besure3.jpg"),
            alt: "Be Sure website screenshot",
            link: "https://besurelabel.de",
            text: "Be Sure Label Website"
        },
        {   image: require("../images/references/web/gambia1.jpg"),
            alt: "Gambia-Hilfe website screenshot",
            link: "https://gambia-hilfe.de",
            text: "Gambia-Hilfe e.V. Website"
        },
        {   image: require("../images/references/web/gambia2.jpg"),
            alt: "Gambia-Hilfe website screenshot",
            link: "https://gambia-hilfe.de",
            text: "Gambia-Hilfe e.V. Website"
        },
        {   image: require("../images/references/web/gambia3.jpg"),
            alt: "Gambia-Hilfe website screenshot",
            link: "https://gambia-hilfe.de",
            text: "Gambia-Hilfe e.V. Website"
        }
    ];
    const [current1, setCurrent1] = useState(0);
    const length1 = slider1.length;
    const prevSlide1 = () => setCurrent1((current1 === 0) ? length1 -1 : current1 -1);
    const nextSlide1 = () => setCurrent1((current1 === length1 - 1) ? 0 : current1 +1);
    if (!Array.isArray(slider1) || slider1.length <= 0) return null;

    return <>
        <div className="references" id="references">
            <h1>References 🪗</h1>
            <p>Fully functional websites, top performing tracks on Beatport, gigs in amazing locations and one hour experimental films. Here you can have a look into it and follow the links to explore them in full effect! By the way: Just click on a image slider to increase its size!</p>
            <div>
                <div>
                    <h2>In the Web</h2>
                    <div className="image-slider-container">
                        <div className="left-arrow" onClick={prevSlide1}>&#10094;</div>
                        <div className="right-arrow" onClick={nextSlide1}>&#10095;</div>
                        {
                            slider1.map((slide, index) => {
                                return (
                                    <div className="image-slider" key={index}>
                                        <div className={(index === current1) ? "slide-active" : "slide"}>
                                            {index === current1 && (
                                                <>
                                                <img src={slide.image} alt={slide.alt} />
                                                <a href={slide.link}>{slide.text}</a>
                                                </>
                                            )}
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </div> 
                </div>
                <div>
                    <h2>In the Video</h2>
                    
                        {/* <img src={require("../images/references/video/film_besure3.jpg")} alt="Screenshot from the film Be Sure by Below Surface" />
                        <img src={require("../images/references/video/film_besure.jpg")} alt="Screenshot from the film Be Sure by Below Surface" />
                        <img src={require("../images/references/video/film_besure2.jpg")} alt="Screenshot from the film Be Sure by Below Surface" />
                        <img src={require("../images/references/video/film_shadow.jpg")} alt="Screenshot from the film Shadowtraveling by Below Surface" />
                        <img src={require("../images/references/video/film_tresor.jpg")} alt="Screenshot of the video recording of Absorbed in Tresor Berlin" /> */}
                    
                </div>
                <div>
                    <h2>In the Music</h2>
                    
                        {/* <img src={require("../images/references/music/dj_tianjin2.jpg")} alt="Below Surface djing on the Great Wall of China" /> 
                        <img src={require("../images/references/music/dj_berlin.jpg")} alt="Below Surface djing in Tresor Berlin" />
                        <img src={require("../images/references/music/dj_beijing.jpg")} alt="Below Surface during a DJ set in Lantern Club Beijing" />
                        <img src={require("../images/references/music/dj_chengdu.jpg")} alt="A shot from a gig in Chengdu" />
                        <img src={require("../images/references/music/dj_chongqing.jpg")} alt="Below Surface and Florian Bo djing in Chongqing" />
                        <img src={require("../images/references/music/dj_nanjing.jpg")} alt="Below Surface an Florian Bo playing music in Nanjing" />
                        <img src={require("../images/references/music/dj_shanghai.jpg")} alt="Below Surface behind the decks in Shanghai" />
                        <img src={require("../images/references/music/dj_tianjin.jpg")} alt="Absorbed playing a liveset next to the Great Wall of China" />
                        <img src={require("../images/references/music/support_apple.jpg")} alt="The Apple music chart, with a Be Sure release included" />
                        <img src={require("../images/references/music/support_hawtin.jpg")} alt="Richie Hawtin supported a track by Below Surface" />
                        <img src={require("../images/references/music/support_inigo.jpg")} alt="Inigo Kennedy charted a track by Below Surface" />
                        <img src={require("../images/references/music/BESURE008.jpg")} alt="The release artwork of a Be Sure release" />
                        <img src={require("../images/references/music/BESURE012.jpg")} alt="The artwork of BESURE012 by Below Surface" />
                        <img src={require("../images/references/music/BESURE016.jpg")} alt="The artwork of BESURE012 by Below Surface" /> */}
                    
                </div>
            </div>
            <div className="socials">
                <a href="https://www.youtube.com/channel/UCB0jjmkPvZ3r9NYJ7HCtpxw" target="_blank" rel="noreferrer"><img src={require("../images/icons/yt.png")} alt="Youtube Logo" /></a>
                <a href="https://open.spotify.com/artist/6tcSqEAmHTLmrztjM0dQl2" target="_blank" rel="noreferrer"><img src={require("../images/icons/sf.png")} alt="Spotify Logo" /></a>
                <a href="https://soundcloud.com/besurelabel" target="_blank" rel="noreferrer"><img src={require("../images/icons/sc.png")} alt="Soundcloud Logo" /></a>
                <a href="https://www.beatport.com/label/be-sure/47385" target="_blank" rel="noreferrer"><img src={require("../images/icons/bp.png")} alt="Beatport Logo" /></a>
            </div>
        </div>
    </>;
}

export default References;
