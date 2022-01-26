import React from 'react';

function Skills() {
  return <>
    <div className="skills" id="skills">
        <h1>Skills 💪</h1>
        <div className="skills-first-flexbox">
            <p>Time to shine. Our biggest advantage is having knowledge in various media fields. Therefore we are able to work independently and to deliver not only the finished product, but also the bits of pieces necessary to build it in first place: From audio recording to editing, still image and film work, to state of the art programming. Not to forget our trophies in music promotion! Have a small glimpse into our capabilities:</p>
            <img src={require("../images/beth-skills.jpg")} alt="" />
        </div>
        <div className="skills-second-flexbox">
            <div>
                <h2>in Web-Development:</h2>
                <ul>   
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                </ul>
            </div>
            <div>
                <h2>in Music Production:</h2>
                <ul>
                    <li>Ableton LIVE</li>
                    <li>Adobe Audition</li>
                    <li>Arranging</li>
                    <li>Mixing</li>
                    <li>Mastering</li>
                </ul>
            </div>
            <div>
                <h2>in Video Editing:</h2>
                <ul>
                    <li>Adobe Premiere Pro</li>
                    <li>Assembly</li>
                    <li>Audio Fixing</li>
                    <li>Cutting</li>
                    <li>Finalizing</li>
                </ul>
            </div>
        </div>
    </div>
  </>;
}

export default Skills;
