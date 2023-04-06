import React, { useRef } from "react"
import "./Contact.css"
import ContactImg from "../assets/connect.png"
import { useMediaQuery } from "../hook/useMediaQuery"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const isVisible = useMediaQuery("#contact")
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_daw0w3e",
        "template_kio97ep",
        form.current,
        "kYcRKVukcCEmEqRay"
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log("message sent")
        },
        (error) => {
          console.log(error.text)
        }
      )
    form.current.value = ""
  }

  return (
    <section id="contact">
      <div className={`contact-section ${isVisible ? "animate" : ""}`}>
        <p className="title">
          CON<span>TACT</span>
        </p>
        <div className="form-section">
          <img src={ContactImg} alt="connection" className="connection-img" />

          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="user_name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" />
            <label htmlFor="subject">Subject</label>
            <input type="text" name="user_subject" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Type your message here"
              name="message"
            />

            <button className="btn">
              <span>SUBMIT</span>
              <i></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
