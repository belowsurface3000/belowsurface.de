import React from 'react';

function Services() {
  return <>
    <div className="services" id="services">
        <h1>🤴 Services 👸</h1>
        <div className="services-flexbox">
            <img src={require("../images/saffu-services.jpg")} alt="" />
            <p>Always at your service! We fulfill expectations, you did not even know you had! First we will discuss your idea, general goal and timeline. Then we will get back to you shortly with a first concept. After settling an agreement on price and product result, we will get to work. Once finished we will present you the final result and sadly then follows the time to say goodbye.. Well, only until your next project comes along!</p>
        </div>
    </div>
  </>;
}

export default Services;
