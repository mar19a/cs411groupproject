import React from "react";
import img from "../pictures/contact.jpg";
import Back from "./common/Back";
import "./ContactPage.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xvondeqn");

  if (state.succeeded) {
    return (
      <div className="thanks-message">
        <h2>Thank you for contacting us. A Seekers representative will contact you shortly.</h2>
      </div>
    );
  }

  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
          className="back"
        />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit}>
            <h4>Here in Seekers, we believe that clients needs always come first. As a result, you should expect us to contact you back in 1 hour!</h4> <br />
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder="First Name" />
              
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
              
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />
            
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              name="message"
              placeholder="Type your message here"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;