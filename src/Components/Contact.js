import React from 'react';

function Contact() {
  return <>
    <div className="contact" id="contact">
            <h1>Contact 💌</h1>
            <p>It's getting serious! Please use the contact form to get in touch! Note: Sending spam or advertising is strictly forbidden. You can use the contact form for questions, interest in our products or if you want to collaborate.</p>
            <div className="contact-form">
                <form>
                    <p><br />Type "okay" to unlock it:</p>
                    <label htmlFor="riddle"></label>
                    <input type="text" id="riddle" name="riddle" placeholder="Just type 'okay' in here" required />
                    <input type="text" className="riddle-output" disabled />
                </form>
            </div>
        </div>
  </>;
}

export default Contact;
