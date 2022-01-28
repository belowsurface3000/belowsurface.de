import React from 'react';

function References() {
  return <>
    <div className="references" id="references">
        <h1>References 🪗</h1>
        <p>Fully functional websites, top performing tracks on Beatport, gigs in amazing locations and one hour experimental films. Here you can have a look into it and follow the links to explore them in full effect! By the way: Just click on a image slider to increase its size!</p>
        <div>
            <div>
                <h2>In the Web</h2>
                <div className="slideshow-container"> 
                    <div className="slide slide--active"><img className="lazyfade fade" src={require("../images/references/web/besure1.jpg")} alt="Be Sure website screenshot" /><div className="text"><a href="https://besurelabel.de" target="_blank" rel="noreferrer">Link: besurelabel.de</a></div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/web/besure2.jpg")} alt="Be Sure website screenshot" /><div className="text"><a href="https://besurelabel.de" target="_blank" rel="noreferrer">Link: besurelabel.de</a></div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/web/besure3.jpg")} alt="Be Sure website screenshot" /><div className="text"><a href="https://besurelabel.de" target="_blank" rel="noreferrer">Link: besurelabel.de</a></div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/web/gambia1.jpg")} alt="Gambia-Hilfe website screenshot" /><div className="text"><a href="https://gambia-hilfe.de" target="_blank" rel="noreferrer">Link: gambia-hilfe.de</a></div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/web/gambia2.jpg")} alt="Gambia-Hilfe website screenshot" /><div className="text"><a href="https://gambia-hilfe.de" target="_blank" rel="noreferrer">Link: gambia-hilfe.de</a></div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/web/gambia3.jpg")} alt="Gambia-Hilfe website screenshot" /><div className="text"><a href="https://gambia-hilfe.de" target="_blank" rel="noreferrer">Link: gambia-hilfe.de</a></div></div>
                    <button className="prevButton">&#10094;</button>
                    <button className="nextButton">&#10095;</button>
                </div>
            </div>
            <div>
                <h2>In the Video</h2>
                <div className="slideshow-container">
                    <div className="slide slide--active"><img className="lazyfade fade" src={require("../images/references/video/film_besure3.jpg")} alt="Screenshot from the film Be Sure by Below Surface" /><div className="text"><a href="https://www.youtube.com/watch?v=OHDyDXFTe1M" target="_blank" rel="noreferrer">Link: Be Sure - a film by Below Surface</a></div></div>  
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/video/film_besure.jpg")} alt="Screenshot from the film Be Sure by Below Surface" /><div className="text"><a href="https://www.youtube.com/watch?v=OHDyDXFTe1M" target="_blank" rel="noreferrer">Link: Be Sure - a film by Below Surface</a></div></div>  
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/video/film_besure2.jpg")} alt="Screenshot from the film Be Sure by Below Surface" /><div className="text"><a href="https://www.youtube.com/watch?v=OHDyDXFTe1M" target="_blank" rel="noreferrer">Link: Be Sure - a film by Below Surface</a></div></div>  
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/video/film_shadow.jpg")} alt="Screenshot from the film Shadowtraveling by Below Surface" /><div className="text"><a href="https://www.youtube.com/watch?v=aYvRN6d_t4U" target="_blank" rel="noreferrer">Link: Shadowtraveling - a film by Below Surface</a></div></div>  
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/video/film_tresor.jpg")} alt="Screenshot of the video recording of Absorbed in Tresor Berlin" /><div className="text"><a href="https://www.youtube.com/watch?v=PwzkRUTl0fU" target="_blank" rel="noreferrer">Link: Absorbed LIVE @ Tresor Berlin (Video)</a></div></div>  
                    <button className="prevButton">&#10094;</button>
                    <button className="nextButton">&#10095;</button>
                </div>
            </div>
            <div>
                <h2>In the Music</h2>
                <div className="slideshow-container">
                    <div className="slide slide--active"><img className="lazyfade fade" src={require("../images/references/music/dj_tianjin2.jpg")} alt="Below Surface djing on the Great Wall of China" /><div className="text">DJing on the Great Wall of China</div></div>   
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/dj_berlin.jpg")} alt="Below Surface djing in Tresor Berlin" /><div className="text">Tresor Berlin</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/dj_beijing.jpg")} alt="Below Surface during a DJ set in Lantern Club Beijing" /><div className="text">Lantern Club Beijing</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/dj_chengdu.jpg")} alt="A shot from a gig in Chengdu" /><div className="text">Tag Chengdu (CN)</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/dj_chongqing.jpg")} alt="Below Surface and Florian Bo djing in Chongqing" /><div className="text">Instinct Chongqing (CN)</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/dj_nanjing.jpg")} alt="Below Surface an Florian Bo playing music in Nanjing" /><div className="text">Pychocats Paradise Nanjing (CN)</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/dj_shanghai.jpg")} alt="Below Surface behind the decks in Shanghai" /><div className="text">Mansion Shanghai</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/dj_tianjin.jpg")} alt="Absorbed playing a liveset next to the Great Wall of China" /><div className="text">LIVE next to the Great Wall of China</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/support_apple.jpg")} alt="The Apple music chart, with a Be Sure release included" /><div className="text">BESURE024 featured on Apple Music</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/support_hawtin.jpg")} alt="Richie Hawtin supported a track by Below Surface" /><div className="text">Support by Richie Hawtin</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/support_inigo.jpg")} alt="Inigo Kennedy charted a track by Below Surface" /><div className="text">Support by Inigo Kennedy</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/BESURE008.jpg")} alt="The release artwork of a Be Sure release" /><div className="text">Tension on Be Sure</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/BESURE012.jpg")} alt="The artwork of BESURE012 by Below Surface" /><div className="text">Below Surface on Be Sure</div></div>
                    <div className="slide"><img className="lazyfade fade" src={require("../images/references/music/BESURE016.jpg")} alt="The artwork of BESURE012 by Below Surface" /><div className="text">Below Surface</div></div>
                    <button className="prevButton">&#10094;</button>
                    <button className="nextButton">&#10095;</button>
                </div>
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
