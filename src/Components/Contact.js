import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";

function Contact() {

  // contact form code
  const [userInput, setUserInput] = useState("");
  const [contactTermsAccepted, setContactTermsAccepted] = useState(false);
  const changeHandler = (e) => {
      setUserInput((e.target.value).toLowerCase());
      if (userInput === "okay") {
        setContactTermsAccepted(true);
      } else {
        setContactTermsAccepted(false);
      }
  }
  // emailjs start
  const emailService = process.env.REACT_APP_EMAIL_SERVICE;
  const emailTemplate = process.env.REACT_APP_EMAIL_TEMPLATE;
  const emailUser = process.env.REACT_APP_EMAIL_USER;

  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(emailService, emailTemplate, form.current, emailUser)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  // contact end

  return <>
    <div className="contact" id="contact">
      <h1>Contact 💌</h1>
      <p>It's getting serious! Please use the contact form to get in touch! Note: Sending spam or advertising is strictly forbidden. You can use the contact form for questions, interest in our products or if you want to collaborate.<br />
      **ADVERTISING & SPAM ARE STRICTLY FORBIDDEN**</p>
      {(contactTermsAccepted) ? 
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Please type in your name here" required />
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Please type in your email here" required />
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit" value="Send" className="submit-button">Send!</button>
        </form> 
      :
        <form>
          <p>Sending spam or advertising is strictly forbidden. You can use the contact form for questions or if you want to collaborate with us in music.<br/>Type "okay" to unlock the contact form:</p>
          <label htmlFor="riddle"></label>
          <input type="text" id="riddle" name="riddle" placeholder="Just type 'okay' in here" value={userInput} onChange={changeHandler} required />
        </form>
      }
    </div>
  </>;
}

export default Contact;
